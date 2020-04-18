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
        <v-card>
          <v-toolbar color="light-blue" flat dark>
            <v-toolbar-title>Sign Up</v-toolbar-title>
            <div class="flex-grow-1" />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                v-validate="signupValidations.email"
                :error-messages="errors.first('email')"
                data-vv-as="email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="text"
              />
              <v-text-field
                v-model="username"
                v-validate="signupValidations.username"
                :error-messages="errors.first('username')"
                data-vv-as="username"
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                id="password"
                v-model="password"
                v-validate="signupValidations.password"
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
            <v-btn color="light-blue" :loading="loading" dark @click="submit">
              Submit
            </v-btn>
            <v-btn color="light-blue" dark @click="cancel">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  SHOW_ALERT
} from '@/store/mutations-types'
import errorHandler from '@/mixins/errorHandlerMixin'
import signupValidations from './data/signupValidations'
import axios from 'axios'
export default {
  name: 'SignUp',
  mixins: [errorHandler],
  data () {
    return {
      email: '',
      username: '',
      password: '',
      loading: false,
      signupValidations
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll().then(response => {
        if (response) {
          this.loading = true
          let signUpData = {
            username: this.username,
            password: this.password,
            email: this.email
          }
          axios.post('http://localhost:3001/signup', signUpData)
            .then(response => {
              const payload = {
                message: 'User created!',
                type: 'success'
              }
              this.$store.commit(SHOW_ALERT, payload)
              this.$router.push({ name: 'login' })             
            }).catch(error => {
              this.$_handleError(error, null)
            }).finally(() => { this.loading = false })
        }
      })
    },
    cancel () {
      this.$router.push({ name: 'login' })
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
