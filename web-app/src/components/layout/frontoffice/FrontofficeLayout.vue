<template>
  <div>
    <navbar :menu-items="getMenuItems" />
    <v-content class="white fill-height" fluid>
      <router-view class="mx-6 my-4" />
    </v-content>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { FRONTEND_RESOURCES } from './menuResources'

export default {
  name: 'FrontofficeLayout',
  components: { Navbar },
  computed: {
    getMenuItems () {
      return FRONTEND_RESOURCES
    }
  }
}
</script>

<style>

</style>
