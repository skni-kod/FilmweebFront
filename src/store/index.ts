import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
    modules: { user },
    getters: {
        moviePage: state => state.moviePage,
        actorPage: state => state.actorPage
    }
})