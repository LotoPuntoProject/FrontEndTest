<template>
  <div>
    <v-snackbar
      v-model="alert.show"
      :timeout="alert.timeout"
      bottom
      right
      :color="alert.type"
    >
      {{ alert.message }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Alert',
  computed: {
    ...mapState(['alert'])
  }
}

</script>

<style>

</style>
