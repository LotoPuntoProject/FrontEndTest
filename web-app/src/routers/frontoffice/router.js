import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './login'
import signup from './signup'
import home from './home'

const rutaDefecto = {
  path: '/',
  redirect: '/login'
}

const routes = [
  rutaDefecto,
  login,
  signup,
  home
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.afterEach((destination) => {
  const tituloPagina = destination.meta && destination.meta.titulo ? `${destination.meta.titulo}` : ''
  document.title = `${process.env.VUE_APP_NAME} ${tituloPagina}`
})

export default router
