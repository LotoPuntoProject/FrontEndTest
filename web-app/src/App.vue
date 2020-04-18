<template>
  <v-app>
    <router-view />
    <alert />
    <loading />
  </v-app>
</template>

<script>
import Alert from '@/components/Alert'
import Loading from '@/components/Loading'
export default {
  name: 'App',
  components: { Alert, Loading },
  data: () => ({
    //
  })
}
</script>
