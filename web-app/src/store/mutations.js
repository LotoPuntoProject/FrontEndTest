import { HIDE_ALERT, HIDE_LOADING, SHOW_ALERT, SHOW_LOADING } from './mutations-types'

export default {
  [SHOW_LOADING]: (state, payload) => {
    state.loading.text = payload ? payload.text : 'Cargando'
    state.loading.show = true
  },

  [HIDE_LOADING]: (state) => {
    state.loading.show = false
  },

  [SHOW_ALERT]: (state, payload) => {
    state.alert.message = payload.message
    state.alert.type = payload.type
    state.alert.show = true
  },

  [HIDE_ALERT]: (state) => {
    state.alert.show = false
  }
}
