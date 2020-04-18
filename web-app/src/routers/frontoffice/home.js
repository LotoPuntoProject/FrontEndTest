'use strict'

export default {
  path: '/home',
  component: () => import('@/components/layout/frontoffice/FrontofficeLayout'),
  children: [{
    name: 'home',
    path: '',
    component: () => import('@/views/frontoffice/home/Home'),
    meta: {
      backoffice: false,
      authRequired: true,
      title: 'Inicio'
    }
  }]
}
