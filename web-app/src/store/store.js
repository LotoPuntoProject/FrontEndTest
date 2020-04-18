import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import security from './modules/security/index'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: { security },
  plugins: [createPersistedState({
    key: `${process.env.VUE_APP_NAME}-vuex`,
    paths: ['security']
  })],
  state,
  mutations
})
