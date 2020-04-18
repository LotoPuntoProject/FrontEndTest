'use strict'

import { LOGIN, LOGOUT } from '@/store/modules/security/mutation-types'

export default {
  methods: {
    $_user_login (user) {
      this.$store.commit(LOGIN, user)
      this.$router.push({ name: 'home' })
    },
    $_user_logout () {
      this.$store.commit(LOGOUT)
    }
  }
}
