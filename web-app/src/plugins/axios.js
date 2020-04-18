import Vue from 'vue'
import axios from 'axios'
import store from '@/store/store'
import { SHOW_LOADING, HIDE_LOADING } from '@/store/mutations-types'

let config = {
  baseURL: process.env.VUE_APP_API_URL
}

const _axios = axios.create(config)

_axios.interceptors.request.use( 
  function (config) {
    store.commit(SHOW_LOADING)
    return config
  },
  function (error) {
    store.commit(SHOW_LOADING)
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  function (response) {
    store.commit(HIDE_LOADING)
    return response
  },
  function (error) {
    store.commit(HIDE_LOADING)
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {     
      get () {
        return _axios
      }
    },
    $axios: {   
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
