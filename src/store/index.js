import { createStore } from 'vuex'

export default createStore({
  state: {
    languageEng: true
  },
  getters: {
  },
  mutations: {
    changeLanguage(state){
      if(state.languageEng === true){
        return state.languageEng = false
      }
      else state.languageEng = true
    }
  },
  actions: {
  },
  modules: {
  }
})
