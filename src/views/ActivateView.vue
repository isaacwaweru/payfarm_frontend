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
    </v-app-bar>

    <div class="signin pa-1">
      <v-layout column class="mt-10">
        <v-flex>
          <div class="d-flex justify-center">
            <v-card
              :class="{
                'form-mobile mt-1 mr-1 ml-1 mb-1':
                  $vuetify.breakpoint.smAndDown,
                form: $vuetify.breakpoint.mdAndUp,
              }"
            >
              <v-img
                lazy-src="../assets/activate.svg"
                src="../assets/activate.svg"
              ></v-img>
              <!-- <div class="form-1">
                <v-img
                  lazy-src="../assets/foot.svg"
                  src="../assets/avr.svg"
                ></v-img>
              </div> -->
              <div></div>

              <div>
                <form class="ml-8 mr-8" v-on:submit.prevent="submitForm">
                  <v-otp-input
                    v-model="otp"
                    length="4"
                    class="mb-5 mt-7"
                    type="number"
                  ></v-otp-input>
                  <v-alert v-if="alertError" type="error">
                    Activation failed, ask for help!
                  </v-alert>
                  <v-btn
                    type="submit"
                    class="mb-5 mt-7"
                    color="#556EE6"
                    dark
                    width="100%"
                  >
                    {{ isLoading }}
                  </v-btn>
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
          <a href="https://mobile.twitter.com/pay_farmorg"
            ><v-icon>mdi-twitter</v-icon></a
          >
          <a href="https://instagram.com/payfarm_org?igshid=YmMyMTA2M2Y="
            ><v-icon>mdi-instagram</v-icon></a
          >
          <a href="https://youtube.com/channel/UCWSi_YJ7_ofpYcQdutWTqnA"
            ><v-icon>mdi-youtube</v-icon></a
          >
          <a href="https://chat.whatsapp.com/B6lb6RL1hTEH9u4Q9PNtYo"
            ><v-icon>mdi-whatsapp</v-icon></a
          >
          <a class="telegram_wdt" href="https://t.me/payfarm_org"
            ><v-img
              lazy-src="../assets/telegram.png"
              max-height="22"
              max-width="22"
              src="../assets/telegram.png"
            ></v-img
          ></a>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      otp: "",
      isLoading: "Activate account",
      alertError: false,
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = "Please wait...";
      try {
        await axios.put("activate/otp", {
          otp: this.otp.trim(),
        });
        this.isLoading = "Activate account";
        this.$router.push("/signin");
      } catch (e) {
        this.alertError = true;
        this.isLoading = "Activate account";
      }
    },
  },
};
</script>

<style>
.signin {
  height: 90vh;
  background: url("../assets/backii.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  height: auto;
  width: 80px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 1rem;
  border-radius: 6px;
}
.form-mobile {
  height: auto;
  width: 400x;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 6px;
}
</style>
