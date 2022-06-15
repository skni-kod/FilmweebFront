import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userProfile: {
            sidebarShown: true
        },
        moviePage: {
            movieID: 1,
            movieData: {},
        },
    },
    mutations: {
        setProfileSidebarShown(state, newVal) {
            state.userProfile.sidebarShown = newVal;
        },
        setMovieID(state, movieID) {
            state.moviePage.movieID = movieID;
        },
        setMovieData(state, movieData) {
            state.moviePage.movieData = movieData;
        },
    },
    actions: {},
    modules: {}
})
