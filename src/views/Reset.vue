<template>
  <div class="app">
    <v-app-bar app color="#fff" flat>
       <router-link to="/" tag="span">
      <div class="d-flex align-center">
        <v-img
          lazy-src="../assets/foot.svg"
          max-height="140"
          max-width="140"
          src="../assets/foot.svg"
        ></v-img>
      </div>
       </router-link>

      <v-spacer></v-spacer>

    </v-app-bar>

    <div class="register pa-1">
      <v-layout column wrap class="mt-10">
        <v-flex xs10 md3>
          <div class="begin d-flex justify-center">
            <v-card class="form">
              <v-img
                lazy-src="../assets/reset.svg"
                src="../assets/reset.svg"
              ></v-img>
              <div class="form-1">
                <v-img
                  lazy-src="../assets/avr.svg"
                  src="../assets/avr.svg"
                ></v-img>
              </div>

              <div>
                <form class="ml-8 mr-8"
                v-on:submit.prevent="submitForm"
                >
                  <h4 v-if="alertSuccessNot">Password</h4>
                  <v-text-field
                    v-if="alertSuccessNot"
                    v-model="password"
                    label="Password"
                    required
                    outlined
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <h4 v-if="alertSuccessNot">Confirm Password</h4>
                  <v-text-field
                    v-if="alertSuccessNot"
                    v-model="confirmpassword"
                    label="Confirm Password"
                    required
                    outlined
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="confirmPasswordRules"
                    :type="show4 ? 'text' : 'password'"
                    name="input-10-2"
                    @click:append="show4 = !show4"
                  ></v-text-field>
                  <v-alert v-if="alertSuccess" type="success">
                  Success! Please check your email!
                  </v-alert>
                  <v-alert v-if="alertError" type="error">
                  Token is invalid or has expired!
                  </v-alert>
                  <v-btn v-if="alertSuccessNot" type="submit" class="mb-5" color="#556EE6" dark width="100%">
                    {{ isLoading }}
                  </v-btn>
                </form>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      password: '',
      confirmpassword: '',
      status: false,
      formIsValid: true,
      isLoading: 'Reset',
      alertSuccess: false,
      alertSuccessNot: true,
      alertError: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 8) || 'Minimum 8 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.password || 'The password confirmation does not match.',
      ],
    }
  },
  methods: {
  async submitForm() {
      this.isLoading = 'Please wait...'
      try {
      const response = await axios.patch('resetPassword', {
       password: this.password,
       token: this.$route.params.token
     });
     console.log(this.$route.params.token)
     console.log(response)
     this.isLoading = 'Reset'
     this.$router.push('/signin')
     } catch (e) {
        this.alertError = true
        this.isLoading = 'Reset'
      }
   }
  }
};
</script>

<style>
.register {
  height: 1100px;
  background: url("../assets/backii.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  height: auto;
  width: 400px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 6px;
  border-radius: 6px;
}
.form-1 {
  transform: translate(0px, -30px);
}
</style>
