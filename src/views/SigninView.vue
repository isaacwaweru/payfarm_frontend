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
    <div class="signin pa-1">
      <v-layout column class="mt-9">
        <v-flex>
          <div class="d-flex justify-center">
            <v-card class="form">
              <v-img
                lazy-src="../assets/signin.svg"
                src="../assets/signin.svg"
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
                  <h4>Email Address</h4>
                  <v-text-field
                    v-model="email"
                    label="Enter Email"
                    required
                    outlined
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                  <h4>Password</h4>
                  <v-text-field
                    v-model="password"
                    label="Enter Password"
                    required
                    outlined
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-checkbox label="Remember me?"></v-checkbox>

                  <v-alert v-if="alertError" type="error">
                  Failed! Invalid email or password!
                  </v-alert>

                  <v-btn type="submit" color="#556EE6" dark width="100%"> {{isLoading}} </v-btn>

                  <div class="text">
                    <router-link style="text-decoration: none; color: inherit;" to="/forgot">
                    <h5 class="pt-3">
                      <v-icon>mdi-lock</v-icon> Forgot your password?
                    </h5>
                    </router-link>
                    <h4 class="pt-2 pb-7">
                      Don't have an account ?
                      <router-link style="text-decoration: none; color: inherit;" to="/registration">
                      <span style="color: #e1a11c">Signup now</span>
                      </router-link>
                    </h4>
                  </div>
                </form>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </div>
     <div class="footer-2">
      <v-row justify="center">
        <v-col cols="12" sm="2">
          <v-img
            lazy-src="../assets/foot.svg"
            max-height="150"
            max-width="120"
            src="../assets/foot.svg"
            class="mt-16 service-img"
          ></v-img>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col>
          <h5
            style="color: #fff; font-size: 15px; opacity: 0.8; font-weight: 300"
            class="footer-text"
          >
            The best way to make investments
          </h5>
        </v-col>
      </v-row>

     <v-row justify="center">
        <v-col>
          <h5
            style="color: #fff; font-size: 14px; opacity: 0.8; font-weight: 600"
            class="footer-text"
          >
            <router-link class="wdt_link" to="#" tag="a">
                  <span class="ml-2">Contact Us</span>
              </router-link> 
              <router-link class="wdt_link" to="/faqs" tag="a">
                  <span class="ml-2">Faqs</span>
              </router-link> 
              <router-link class="wdt_link" to="/privacy-policy" tag="a">
                <span class="ml-2">Privacy Policy</span>
              </router-link>
              <router-link class="wdt_link" to="/terms-of-use" tag="a">
                <span class="ml-2">Terms Of Use</span>
              </router-link>
          </h5>
        </v-col>
      </v-row>

      <v-container>
        <div class="wdt_footer_social box d-flex justify-center pb-4">
          <a href="#"><v-icon>mdi-facebook</v-icon></a>
          <a href="https://mobile.twitter.com/pay_farmorg"><v-icon>mdi-twitter</v-icon></a>
          <a href="https://instagram.com/payfarm_org?igshid=YmMyMTA2M2Y="><v-icon>mdi-instagram</v-icon></a>
          <a href="https://youtube.com/channel/UCWSi_YJ7_ofpYcQdutWTqnA"><v-icon>mdi-youtube</v-icon></a>
          <a href="https://chat.whatsapp.com/B6lb6RL1hTEH9u4Q9PNtYo"><v-icon>mdi-whatsapp</v-icon></a>
          <a class="telegram_wdt" href="https://t.me/payfarm_org"><v-img
          lazy-src="../assets/telegram.png"
          max-height="22"
          max-width="22"
          src="../assets/telegram.png"
        ></v-img></a>
        </div>
      </v-container>
   </div>
  </div>

  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      alertError: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      isLoading: 'Login',
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 8) || 'Minimum 8 characters',
      ],
      rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid email!'
          },
        },
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = 'Please wait...'
      try {
        const response = await axios.post('login', {
        email: this.email.trim().toLowerCase(),
        password: this.password
      });
      localStorage.setItem('token', response.data.token);
      this.isLoading = 'Login'
      this.$router.push('/home')
      } catch (e) {
        this.alertError = true
        this.isLoading = 'Login'
      }
    }
  }
};
</script>

<style>
.signin {
  height: 1100px !important;
  background: url("../assets/backii.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  height: auto;
  width: auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 1rem;
  border-radius: 6px;
}
.form-1 {
  transform: translate(0px, -30px);
}
.text {
  text-align: center;
}
</style>
