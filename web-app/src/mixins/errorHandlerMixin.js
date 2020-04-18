'use strict'
import {
  SHOW_ALERT
} from '@/store/mutations-types'

const errorHandlerMixing = {
  methods: {
    $_handleError (error, errorMessage) {
      let message
      if (errorMessage) {
        message = errorMessage
      } else {
        message = 'Something went wrong, keep calm and try later'
      }

      let causeBy = error.response ? error.response.data.error : message
      const payload = {
        message: causeBy,
        type: 'error'
      }
      this.$store.commit(SHOW_ALERT, payload)
    }
  }
}

export default errorHandlerMixing
