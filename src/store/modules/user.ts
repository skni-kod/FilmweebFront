import { Module } from 'vuex';
import axios from 'axios';
import router from '../../router/index';

const userModule: Module<any, any> = {
    state: {
        token: "",
        refreshToken: "",
        userId: 1,
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
            state.userId = undefined;
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
        }
    },

    actions: {
        async login({ commit }, data) {
            await axios
                .post('/api/token/', {
                    email: data.email,
                    password: data.password,
                })
                .then((res) => {
                    if (res.status == 200) {
                        commit('authUser', {
                            token: res.data.access,
                            refreshToken: res.data.refresh,
                        });
                        router.push({ name: 'Home' });
                    }
                })
                .catch((error) => {
                    alert('Błąd logowania. Spróbuj ponownie.');
                    console.table(error);
                })
        },
        async logout({ commit, getters }) {
            await axios
                .get('/api/logout/', {
                    headers: {
                        token: getters.token,
                    }
                })
                .catch((error) => {
                    alert(error);
                })
            commit('clearAuthData');
            router.replace({ name: 'Login' });
        },

        async getUserData({ commit, getters }) {
            await axios
                .get('/api/check/', {
                    headers: {
                        Authorization: 'Bearer ' + getters.token,
                    }
                })
                .then((res) => {
                    if (res.status == 200) {
                        commit('setUserData', {
                            id: res.data.id,
                            data: res.data,
                            admin: res.data.is_admin,
                        });
                    }
                })
                .catch((error) => {
                    alert('Błąd w uzyskaniu danych użytkownika.');
                    console.log(error);
                })
        },
        async getProfileData({ commit, getters }) {
            await axios
                .get(`/api/profiles/${getters.userId}/`)
                .then((res) => {
                    if (res.status == 200) {
                        commit('setProfileData', res.data);
                    }
                })
                .catch((error) => {
                    alert('Błąd w uzyskaniu danych profilowych użytkownika.');
                    console.log(error);
                })
        }
    },

    getters: {
        token: state => state.token,
        isAuthenticated: state => state.token !== undefined,
        userId: state => state.userId,
        isAdmin: state => state.isAdmin,
        profileData: state => state.profileData,
        userData: state => state.userData
    },
}

export default userModule;