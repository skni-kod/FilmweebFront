import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        debug: false,
        moviePage: {
            movieID: 1,
            movieData: {},
        },
        actorPage: {
            actorID: 1,
            actorData: {},
        },
        profilePage: { 
            movieLists: [],
        }
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
        setDebug(state, debug : boolean) {
            state.debug = debug;
        }
    },
    actions: {},
    modules: { user },
    getters: {
        moviePage: state => state.moviePage,
        actorPage: state => state.actorPage,
        debug: state => state.debug
    }
})