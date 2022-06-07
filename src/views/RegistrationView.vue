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
              <v-img lazy-src="../assets/r.svg" src="../assets/r.svg"></v-img>
              <div class="form-1">
                <v-img
                  lazy-src="../assets/avr.svg"
                  src="../assets/avr.svg"
                ></v-img>
              </div>

              <div>
                <form class="ml-8 mr-8" v-on:submit.prevent="submitForm">
                  <h4 v-if="alertSuccessNot">Full Name</h4>
                  <v-text-field
                    v-if="alertSuccessNot"
                    v-model="fullname"
                    label="Enter Full Name"
                    required
                    outlined
                  ></v-text-field>
                  <h4 v-if="alertSuccessNot">Email</h4>
                  <v-text-field
                    v-if="alertSuccessNot"
                    v-model="email"
                    label="Enter Email"
                    required
                    outlined
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                  <h4 v-if="alertSuccessNot">Phone Number</h4>
                  <v-text-field
                    v-if="alertSuccessNot"
                    v-model="phone"
                    label="Phone Number"
                    required
                    outlined
                  ></v-text-field>
                  <h4 v-if="alertSuccessNot">Referral Phonenumber</h4>
                  <v-text-field
                    v-if="alertSuccessNot"
                    v-model="referral"
                    label="Referral Phonenumber(Optional)"
                    outlined
                  ></v-text-field>
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
                  <v-checkbox
                    v-if="alertSuccessNot"
                    label="Terms of service"
                  ></v-checkbox>
                  <v-alert v-if="alertSuccess" type="success">
                    Success! Please check your email!
                  </v-alert>
                  <v-alert v-if="alertError" type="error">
                    Failed! Invalid email or phone!
                  </v-alert>
                  <v-btn
                    v-if="alertSuccessNot"
                    type="submit"
                    class="mb-5"
                    color="#556EE6"
                    dark
                    width="100%"
                  >
                    {{ isLoading }}
                  </v-btn>

                  <div v-if="alertSuccessNot" class="text">
                    <h4 class="pt-2 pb-3">
                      Have an account ?
                      <router-link
                        style="text-decoration: none; color: inherit"
                        to="/signin"
                      >
                        <span style="color: #e1a11c">Login now</span>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      referral: "",
      confirmpassword: "",
      status: false,
      isLoading: "Register",
      formIsValid: true,
      alertSuccess: false,
      alertSuccessNot: true,
      alertError: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      passwordRules: [
        (value) => !!value || "Please type password.",
        (value) => (value && value.length >= 8) || "Minimum 8 characters",
      ],
      confirmPasswordRules: [
        (value) => !!value || "type confirm password",
        (value) =>
          value === this.password ||
          "The password confirmation does not match.",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = "Please wait...";
      try {
        const response = await axios.post("register", {
          fullname: this.fullname,
          email: this.email.toLowerCase(),
          phone: this.phone,
          password: this.password,
          referral: this.referral,
        });
        console.log(response);
        this.isLoading = "Register";
        this.$router.push("/activate");
      } catch (e) {
        this.alertError = true;
        this.isLoading = "Register";
      }
    },
  },
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
  width: 80%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 6px;
  border-radius: 6px;
}
.form-1 {
  transform: translate(0px, -30px);
}
</style>
