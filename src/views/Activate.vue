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
                  <v-alert v-if="alertSuccess" type="success">
                  Success! Please check your email!
                  </v-alert>
                  <v-alert v-if="alertError" type="error">
                  Activation failed, try again!
                  </v-alert>
                  <v-btn type="submit" class="mb-5" color="#556EE6" dark width="100%">
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
      isLoading: 'Activate account',
      alertSuccess: false,
    }
  },
  methods: {
  async submitForm() {
      this.isLoading = 'Please wait...'
      try {
      const response = await axios.put('activate', {
       token: this.$route.params.token
     });
     console.log(this.$route.params.token)
     console.log(response)
     this.isLoading = 'Activate account'
     this.$router.push('/signin')
     } catch (e) {
        this.alertError = true
        this.isLoading = 'Activate account'
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
