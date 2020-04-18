<template>
  <div>
    <page-title :title="title" />
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="justify-center light-blue darken-4">
        <v-avatar size="150">
          <v-img
            :src="getUserAvatar"
          />
        </v-avatar>
      </v-card-title>
      <v-card-subtitle class="ma-2 pb-0 font-weight-bold">{{ getUserFullName }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <v-chip label class="ma-2 text-center" color="teal" text-color="white">
          <v-icon left color="white">mdi-account</v-icon>
          {{ getCurrentUser.username }}
        </v-chip>
        
        <v-chip label class="ma-2" color="teal" text-color="white">
          <v-icon left color="white">mdi-email</v-icon>
          {{ getCurrentUser.email }}
        </v-chip>

        <v-chip label class="ma-2" color="teal" text-color="white">
          <v-icon left color="white">mdi-account-cash</v-icon>
          ${{ getCurrentUser.cash }}
        </v-chip>        
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    PageTitle
  },
  data () {
    return {
      title: 'Home'
    }
  },
  computed: {
    ...mapGetters(['getUserFullName', 'getUserAvatar', 'getCurrentUser'])
  }
}
</script>
