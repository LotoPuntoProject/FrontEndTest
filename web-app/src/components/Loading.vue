<template>
  <v-dialog
    v-model="loading.show"
    hide-overlay
    persistent
    width="300"
  >
    <v-card
      color="primary"
      dark
    >
      <v-card-text>
        {{ loading.text }}
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Loading',
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style>

</style>
