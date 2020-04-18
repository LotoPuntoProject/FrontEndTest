<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="light-blue"
            flat
            dark
          >
            <v-toolbar-title>Log in</v-toolbar-title>
            <div class="flex-grow-1" />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                v-validate="loginValidations.username"
                :error-messages="errors.first('login')"
                data-vv-as="username"
                label="Username"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                id="password"
                v-model="password"
                v-validate="loginValidations.password"
                :error-messages="errors.first('password')"
                data-vv-as="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1" />
            <v-btn
              color="light-blue"
              dark
              @click="signUp"
            >
              Sign Up
            </v-btn>
            <v-btn
              color="light-blue"
              :loading="loading"
              dark
              @click="login"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import authentication from '@/mixins/authenticationMixin'
import errorHandler from '@/mixins/errorHandlerMixin'
import axios from 'axios'
import loginValidations from './data/loginValidations'

export default {
  name: 'UserLogin',
  mixins: [authentication, errorHandler],
  data () {
    return {
      username: '',
      password: '',
      loading: false,
      loginValidations
    }
  },
  methods: {
    login () {
      this.$validator.validateAll().then(response => {
        if (response) {
          this.loading = true
          let loginUser = {
            username: this.username,
            password: this.password
          }
          axios.post('http://localhost:3001/login', loginUser)
            .then(response => {
              const user = {
                id: response.data.user.id,
                fullName: response.data.user.fullName,
                username: response.data.user.username,
                email: response.data.user.email,
                avatar: response.data.user.avatar,
                cash: response.data.user.cash
              }
              this.$_user_login(user)
            }).catch(error => {
              this.$_handleError(error, null)
            }).finally(() => { this.loading = false })
        }
      })
    },
    signUp () {
      this.$router.push({ name: 'signup' })
    }
  }
}

</script>

<style scoped>
 .container {
   background-image: url('../../../assets/logos/fondo-14.jpg');
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
   background-repeat:no-repeat;
   background-position: center;
 }

</style>
