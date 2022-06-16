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
        actorPage: {
            actorID: 1,
            actorData: {},
        },
    },
    mutations: {
        setMovieID(state, movieID) {
            state.moviePage.movieID = movieID;
        },
        setMovieData(state, movieData) {
            state.moviePage.movieData = movieData;
        },
        setActorID(state, actorID) {
            state.actorPage.actorID = actorID;
        },
        setActorData(state, actorData) {
            state.actorPage.actorData = actorData;
        },
    },
    actions: {},
    modules: {}
})