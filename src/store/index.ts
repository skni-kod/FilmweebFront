import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userProfile: { 
        sidebarShown: true
      }
  },
  mutations: {
    setProfileSidebarShown (state, newVal) { 
      state.userProfile.sidebarShown = newVal;
    }
  },
  actions: {
  },
  modules: {
  }
})
