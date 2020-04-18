import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import vuetify from './plugins/vuetify'

import VeeValidate from 'vee-validate'
import routerFrontoffice from './routers/frontoffice/router'
import './plugins/axios'

Vue.config.productionTip = false
Vue.use(VeeValidate)

let router = routerFrontoffice
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
