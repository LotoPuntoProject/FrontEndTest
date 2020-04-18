<template>
  <nav>
    <v-app-bar
      flat
      app
      :color="appBarColor"
      :clipped-left="true"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title :class="`${textColor}--text text-capitalize`">
        <span class="font-weight-light">Eventos </span>
        <span v-show="backoffice">Backoffice</span>
      </v-toolbar-title>
      <v-spacer />

      <v-btn
        text
        :color=" `${textColor}` "
        @click="logout"
      >
        <span>Salir</span>
        <v-icon right>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      class="white"
      app
    >
      <v-layout
        column
        align-center
      >
        <v-flex class="mt-5 d-flex align-center flex-column">
          <v-avatar size="80">
            <img
              :src="getUserAvatar"
              alt=""
            >
          </v-avatar>
          <p class="subtitle-2 mt-1 cap-fullname">
            {{ getUserFullName }}
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="resource in menuItems"
          :key="resource.text"
          :to="resource.route"
          exact-active-class="grey lighten-4"
          color="black"
        >
          <v-list-item-action>
            <v-icon>{{ resource.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ resource.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  props: {
    appBarColor: {
      type: String,
      default: 'light-blue'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    menuItems: {
      type: Array,
      default: () => [],
      description: 'Los items del menu a mostrar'
    }
  },
  data () {
    return {
      drawer: true,
      backoffice: false
    }
  },
  computed: {
    ...mapGetters(['getUserFullName', 'getUserAvatar'])
  },
  methods: {
    logout () {
      this.$router.push({ name: 'login' })
    }
  }

}
</script>

<style scoped>
 .cap-fullname {
   text-transform: capitalize;
 }
</style>
