'use strict'

export default {
  path: '/signup',
  component: () => import('@/components/layout/frontoffice/AuthFrontofficeLayout'),
  children: [{
    name: 'signup',
    path: '',
    component: () => import('@/views/frontoffice/signup/SignUp'),
    meta: {
      title: 'SignUp'
    }
  }]
}
