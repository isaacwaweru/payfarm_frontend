<template>
  <div class="app">
    <v-app-bar app color="#fff" flat>
      <div class="d-flex align-center">
        <v-img
          lazy-src="../assets/foot.svg"
          max-height="140"
          max-width="140"
          src="../assets/foot.svg"
        ></v-img>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/signin" tag="span">
        <v-btn color="#53C351" height="35" dark> Login </v-btn>
      </router-link>
    </v-app-bar>

    <v-layout column wrap>
      <v-flex xs12 md3
        ><section>
          <div class="large">
            <lottie :options="largeScreens" v-on:animCreated="handleAnimation">
            </lottie>
          </div>
          <div class="small">
            <lottie :options="mobile" v-on:animCreated="handleAnimation">
            </lottie>
          </div>
          <div class="title">
            <header class="heading">
              <p>Empowering Farming</p>
              <p>through Technology</p>
            </header>

            <div class="subheading">
              <p>
                We help realize your dreams of investing in Agriculture,<br />
                let's start with small things that can change the world,<br />
                so we can live happy and abundant lives.<br />
              </p>
              <p>
                Feeding the animal makes the animal grow and later<br />
                sell it on the site and earn profits
              </p>
            </div>
          </div>
        </section>

        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="2">
              <h2 class="heading-3 mt-6">How it works</h2>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" sm="3">
              <h3 class="heading-4">Sell your animal once its grown</h3>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-card class="section-1 rounded-0" elevation="0">
            <v-row justify="center">
              <v-col cols="12" md="3">
                <div class="pa-4 text-center rounded-0">
                  <div class="service-card">
                    <v-img
                      lazy-src="../assets/register.svg"
                      max-height="80"
                      max-width="60"
                      src="../assets/register.svg"
                      class="service-img"
                    ></v-img>
                    <h3 class="sub-head">Register</h3>
                    <p>Register using your details and get <br />verified</p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="3">
                <div class="pa-4 text-center rounded-0">
                  <div class="service-card">
                    <v-img
                      lazy-src="../assets/buy.svg"
                      max-height="80"
                      max-width="60"
                      src="../assets/buy.svg"
                      class="service-img"
                    ></v-img>
                    <h3 class="sub-head">Buy a young one</h3>
                    <p>
                      Select your package/ animal <br />investment in a select
                      time frame
                    </p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="3">
                <div class="pa-4 text-center rounded-0">
                  <div class="service-card">
                    <v-img
                      lazy-src="../assets/feed.svg"
                      max-height="80"
                      max-width="60"
                      src="../assets/feed.svg"
                      class="service-img"
                    ></v-img>
                    <h3 class="sub-head">Feed your animal</h3>
                    <p>
                      Feed your animal and check on<br />
                      progress
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="3">
                <div class="pa-4 text-center rounded-0">
                  <div class="service-card">
                    <v-img
                      lazy-src="../assets/sell.svg"
                      max-height="80"
                      max-width="60"
                      src="../assets/sell.svg"
                      class="service-img"
                    ></v-img>
                    <h3 class="sub-head">Sell your chicken</h3>
                    <p>Cash out once your chicken has blossom</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

        <v-container>
          <v-card elevation="0">
            <v-row :class="{ 'ml-16': $vuetify.breakpoint.mdAndUp }">
              <v-col>
                <div
                  :class="{
                    'card-1 mt-16 mb-5 ml-auto mr-auto':
                      $vuetify.breakpoint.smAndDown,
                    'card-1 mt-16 mb-5': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <div class="card-2">
                    <h1
                      style="
                        color: #231d4f;
                        font-weight: 500;
                        padding-top: 25px !important;
                      "
                      class="mt-6 ml-6"
                    >
                      k.500
                      <span
                        style="
                          color: #848199;
                          font-weight: 300;
                          font-size: 18px;
                        "
                        >/month</span
                      >
                    </h1>
                    <h2 style="color: #231d4f; font-weight: 500" class="ml-6">
                      Chick
                    </h2>
                    <v-divider width="250" class="ml-6" />
                    <p
                      style="
                        color: #848199;
                        font-weight: 5300;
                        padding-top: 5px !important;
                      "
                      class="ml-6 mt-4"
                    >
                      Pay and grow your fam animals
                    </p>
                    <v-img
                      lazy-src="../assets/sell.svg"
                      max-height="120"
                      max-width="120"
                      src="../assets/chick.svg"
                      style="margin: auto !important"
                      class="mt-16"
                    ></v-img>
                  </div>
                  <router-link style="text-decoration: none; color: inherit;" to="/signin">
                  <div class="action">PROCEED TO BUY</div>
                  </router-link>
                </div>
              </v-col>

              <v-col>
                <div
                  :class="{
                    'card-1-r mt-16 mb-5 ml-auto mr-auto':
                      $vuetify.breakpoint.smAndDown,
                    'card-1-r mt-16 mb-5': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <div class="card-2">
                    <h1
                      style="
                        color: #231d4f;
                        font-weight: 500;
                        padding-top: 25px !important;
                      "
                      class="mt-6 ml-6"
                    >
                      k.500
                      <span
                        style="
                          color: #848199;
                          font-weight: 300;
                          font-size: 18px;
                        "
                        >/month</span
                      >
                    </h1>
                    <h2 style="color: #231d4f; font-weight: 500" class="ml-6">
                      Calf
                    </h2>
                    <v-divider width="250" class="ml-6" />
                    <p
                      style="
                        color: #848199;
                        font-weight: 5300;
                        padding-top: 5px !important;
                      "
                      class="ml-6 mt-4"
                    >
                      Pay and grow your fam animals
                    </p>
                    <v-img
                      lazy-src="../assets/sell.svg"
                      max-height="130"
                      max-width="120"
                      src="../assets/calf.svg"
                      style="margin: auto !important"
                      class="mt-16"
                    ></v-img>
                  </div>

                  <div class="action">COMING SOON</div>
                </div>
              </v-col>

              <v-col>
                <div
                  :class="{
                    'card-1-r-r mt-16 mb-5 ml-auto mr-auto':
                      $vuetify.breakpoint.smAndDown,
                    'card-1-r-r mt-16 mb-5': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <div class="card-2">
                    <h1
                      style="
                        color: #231d4f;
                        font-weight: 500;
                        padding-top: 25px !important;
                      "
                      class="mt-6 ml-6"
                    >
                      k.500
                      <span
                        style="
                          color: #848199;
                          font-weight: 300;
                          font-size: 18px;
                        "
                        >/month</span
                      >
                    </h1>
                    <h2 style="color: #231d4f; font-weight: 500" class="ml-6">
                      Kid
                    </h2>
                    <v-divider width="250" class="ml-6" />
                    <p
                      style="
                        color: #848199;
                        font-weight: 5300;
                        padding-top: 5px !important;
                      "
                      class="ml-6 mt-4"
                    >
                      Pay and grow your fam animals
                    </p>
                    <v-img
                      lazy-src="../assets/sell.svg"
                      max-height="120"
                      max-width="120"
                      src="../assets/kid.svg"
                      style="margin: auto !important"
                      class="mt-16"
                    ></v-img>
                  </div>

                  <div class="action">COMING SOON</div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

        <div class="footer-1">
          <v-card :class="{
                    'form-mobile mt-1 mr-1 ml-1 mb-1':
                      $vuetify.breakpoint.smAndDown,
                    'form': $vuetify.breakpoint.mdAndUp,
                  }">
            <v-img
              lazy-src="../assets/head.svg"
              src="../assets/head.svg"
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
                <v-checkbox label="Remember me?" required></v-checkbox>

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
            Contact Us<span
              style="
                color: #fff;
                font-size: 14px;
                opacity: 0.8;
                font-weight: 600;
              "
              class="ml-10"
              >FAQs</span
            >
          </h5>
        </v-col>
      </v-row>

      <v-container>
        <div class="box d-flex justify-center pb-4">
          <v-icon>mdi-facebook</v-icon>
          <v-icon>mdi-twitter</v-icon>
          <v-icon>mdi-instagram</v-icon>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Lottie from "../LottieView.vue";
import animationData1 from "../assets/payfarm.json";
import animationData2 from "../assets/mobile.json";
import axios from 'axios'
export default {
   name: "app",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      largeScreens: { animationData: animationData1 },
      mobile: { animationData: animationData2 },
      animationSpeed: 1,
      email: '',
      password: '',
      alertError: false,
      isLoading: 'Login',
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 8) || 'Minimum 8 characters',
      ],
      rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = 'Please wait...'
      try {
        const response = await axios.post('login', {
        email: this.email,
        password: this.password
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      this.$store.dispatch('user', response.data.user);
      this.isLoading = 'Login'
      this.$router.push('/inside')
      } catch (e) {
        this.alertError = true
        this.isLoading = 'Login'
      }
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
}
.title {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  color: #fff;
  text-align: center;
  font-size: 56px;
}
.heading p {
  padding: 30px 0px;
  margin-bottom: 16px;
}
.subheading {
  color: #fff;
  text-align: center;
  text-decoration-style: bold;
  font-size: 18px;
  z-index: 1000;
}
.heading-3 {
  color: #61bd5b;
  text-align: center !important;
}
.heading-4 {
  color: black;
  text-align: center !important;
}
.sub-head {
  color: #b16c53;
}
.service-img {
  margin: 0 auto !important;
}
.card-1-r {
  height: 400px;
  width: 300px;
  background-color: #f496d1;
  -webkit-box-shadow: 0px -4px 8px #f0b3d9;
  -moz-box-shadow: 0px -4px 8px #f0b3d9;
  box-shadow: 0px -4px 8px #f0b3d9;
}
.card-1-r-r {
  height: 400px;
  width: 300px;
  background-color: #0a0535;
  -webkit-box-shadow: 0px -4px 8px #19134e;
  -moz-box-shadow: 0px -4px 8px #19134e;
  box-shadow: 0px -4px 8px #19134e;
}
.card-1 {
  height: 400px;
  width: 300px;
  background-color: #ef9956;
  -webkit-box-shadow: 0px -4px 8px #ef9956;
  -moz-box-shadow: 0px -4px 8px #ef9956;
  box-shadow: 0px -4px 8px #ef9956;
}
.card-2 {
  height: 400px;
  width: 290px;
  background-color: #fff;
  transform: translate(-20px, -50px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 2px;
}
.action {
  margin-top: -38px;
  margin-left: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}
.footer-1 {
  height: 6;
  background: url("../assets/footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
}
.form {
  height: auto;
  width: 400px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 6px;
  margin-left: 80px;
}
.form-mobile {
  height: auto;
  width: 400x;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 6px;
}
.footer-2 {
  background-color: #1e2833;
  height: auto;
}
.footer-text {
  text-align: center !important;
}
.box {
  gap: 30px;
}
.v-icon {
  color: #fff !important;
}
.section-2 {
  margin: auto !important;
}
.text {
  text-align: center;
}
.form-1 {
  transform: translate(0px, -30px);
}
.packages {
  background-color: #e5e5e5;
}
@media screen and (max-width: 425px) {
  p {
    line-height: 1rem !important;
    padding: 5px 0px !important;
    margin-bottom: 3px !important;
  }
  .heading {
    font-size: 18px;
  }
  .subheading {
    font-size: 10px !important;
  }
  .large {
    display: none;
  }
}
@media screen and (min-width: 551px) {
  .small {
    display: none;
  }
}
</style>
