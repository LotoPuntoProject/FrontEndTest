'use strict'

export default {
  path: '/login',
  component: () => import('@/components/layout/frontoffice/AuthFrontofficeLayout'),
  children: [{
    name: 'login',
    path: '',
    component: () => import('@/views/frontoffice/login/UserLogin'),
    meta: {
      title: 'Login'
    }
  }]
}
