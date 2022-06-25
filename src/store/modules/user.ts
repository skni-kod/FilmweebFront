import {Module} from 'vuex';
import axios from 'axios';
import router from '../../router/index';
import Vue from 'vue';

// eslint-disable-next-line
const userModule: Module<any, any> = {
    state: {
        token: "",
        refreshToken: "",
        userId: null,
        isAdmin: false,
        profileData: {},
        userData: {}
    },

    mutations: {
        authUser(state, auth) {
            state.token = auth.token;
            state.refreshToken = auth.refreshToken;
        },
        clearAuthData(state) {
            state.token = "";
            state.refreshToken = "";
            state.userId = null;
            state.isAdmin = false;
            state.profileData = {};
            state.userData = {};
        },
        setUserData(state, response) {
            state.userData = response.data;
            state.userId = response.id;
            state.isAdmin = response.admin;
        },
        setProfileData(state, response) {
            state.profileData = response;
        },
        restoreToken(state, token) {
            state.token = token;
        }
    },

    actions: {
        async login({commit, dispatch}, data) {
            await axios
                .post('/api/token', {
                    email: data.email,
                    password: data.password,
                })
                .then((res) => {
                    if (res.status == 200) {
                        commit('authUser', {
                            token: res.data.access,
                            refreshToken: res.data.refresh,
                        });
                        dispatch('getUserData');
                        Vue.$cookies.set('filmweeb_sess_user', res.data.access);
                        router.push({name: 'Home'});
                    }
                })
                .catch((error) => {
                    alert('Błąd logowania. Spróbuj ponownie.');
                    console.table(error);
                })
        },
        async logout({commit, getters}) {
            await axios
                .get('/api/logout', {
                    headers: {
                        token: getters.token,
                    }
                })
                .catch((error) => {
                    console.table(error);
                })
            commit('clearAuthData');
            Vue.$cookies.remove('filmweeb_sess_user');
            router.replace({name: 'Home'});
        },

        async getUserData({commit, getters, dispatch}) {
            await axios
                .get('/api/check', {
                    headers: {
                        Authorization: 'Bearer ' + getters.token,
                    }
                })
                .then((res) => {
                    if (res.status == 200) {
                        commit('setUserData', {
                            id: res.data.id,
                            data: res.data,
                            admin: res.data.is_superuser,
                        });
                        dispatch('getProfileData');
                    }
                })
                .catch((error) => {
                    //alert('Błąd w uzyskaniu danych użytkownika.');
                    if (error.response.status == 401) {
                        dispatch('logout');
                        router.replace({name: 'Login'});
                    }
                    console.table(error);
                })
        },
        async getProfileData({commit, getters}) {
            await axios
                .get(`/api/profiles/${getters.userId}/`)
                .then((res) => {
                    if (res.status == 200) {
                        commit('setProfileData', res.data);
                    }
                })
                .catch((error) => {
                    //alert('Błąd w uzyskaniu danych profilowych użytkownika.');
                    console.table(error);
                })
        },
        async getProfileSession({commit, dispatch}) {
            if (Vue.$cookies.isKey('filmweeb_sess_user')) {
                commit('restoreToken', Vue.$cookies.get('filmweeb_sess_user'));
                dispatch('getUserData');
            }
        }
    },

    getters: {
        token: state => state.token,
        isAuthenticated: state => state.token !== "",
        userId: state => state.userId,
        isAdmin: state => state.isAdmin,
        profileData: state => state.profileData,
        userData: state => state.userData
    },
}

export default userModule;