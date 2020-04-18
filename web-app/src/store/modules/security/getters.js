'use strict'

export default {
  getUserFullName: (state) => state.user ? state.user.fullName : '',

  getUserAvatar: (state) => state.user ? state.user.avatar : null,

  getCurrentUser: (state) => state.user ? state.user : null
}
