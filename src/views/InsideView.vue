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

      <v-spacer />
      <p class="greeting">Hello, {{ user.fullname }}</p>
      <v-spacer />

      
        <div>
          <v-btn color="#53C351" height="35" dark @click="handleClick"> Log Out </v-btn>
        </div>
  
    </v-app-bar>

    <v-toolbar dense color="#0B0636" dark class="title-1">
      <v-subheader
        class="sub-1">
        <h2>My Farm Animals</h2>
      </v-subheader>

      <v-spacer></v-spacer>

      <v-subheader
        class="sub">
        <h2>Hello, {{ user.fullname.split(' ').slice(0, -1).join(' ') }}</h2>
      </v-subheader>


    </v-toolbar>

    <v-toolbar dense color="#0B0636" dark>
      <v-toolbar-title class="title ">MY FARM ANIMALS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-subheader
        class="sub">
        <h2>KES:{{ user.amount }}</h2>
      </v-subheader>

      <v-btn class="ma-2" small outlined color="#53C351" rounded
        >Withdraw</v-btn
      >

      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2" v-bind="attrs" v-on="on" color="#53C351" small rounded>Buy Feed</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="#53C351"
              dark
            >Feed you animal</v-toolbar>
            <h5 class="pl-3 pt-1">Enter amount and your Mpesa Number</h5>
            <form class="ml-8 mr-8"
                v-on:submit.prevent="submitForm"
                >
                  <v-text-field
                    v-model="phone"
                    label="Phone number"
                    required
                    outlined
                    class="pa-4"
                    type="number"
                  ></v-text-field>

                  <v-text-field
                    v-model="amount"
                    label="Amount"
                    required
                    outlined
                    value="100"
                    class="pl-4 pr-4"
                    type="number"
                  ></v-text-field>

                  <v-alert v-if="alertSuccess" type="success">
                  Success! Please check your phone!
                  </v-alert>

                  <v-btn type="submit" color="#e1a11c" dark class="ml-4" > {{isLoading}} </v-btn>
              </form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-toolbar>

    <div class="background">
      <v-col>
        <div
          :class="{
            'card-1 mt-16 mb-5 ml-auto mr-auto': $vuetify.breakpoint.smAndDown,
            'card-1 mt-16 mb-5 ml-16': $vuetify.breakpoint.mdAndUp,
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
              <span style="color: #848199; font-weight: 300; font-size: 18px"
                >/month</span
              >
            </h1>
            <h2 style="color: #231d4f; font-weight: 500" class="ml-6">Chick</h2>
            <v-divider width="250" class="ml-6" />
            <p
              style="
                color: #848199;
                font-weight: 5300;
                padding-top: 5px !important;
              "
              class="ml-6 mt-4"
            >
              Your chick is 3 months old
            </p>
            <v-img
              lazy-src="../assets/chicken/oneweek.svg"
              max-height="300"
              max-width="300"
              src="../assets/chicken/oneweek.svg"
              style="margin: auto !important"
              class="mt-16"
            ></v-img>
          </div>

          <div class="action">BUY FEED</div>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {

  data() {
    return {
      phone: '',
      amount: '',
      isLoading: 'Confirm',
      alertSuccess: false,
    }
  },

  // async created() {
  //   const response = await axios.get('users');
  //   console.log('yo', response);
  // },

  methods: {
    handleClick() {
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    async submitForm() {
      this.isLoading = 'Please wait...'
      const phone = '254' + this.phone.substring(1);
      console.log(phone);
      const data = {
        phone: phone,
        amount: this.amount
      }
      try {
        const response = await axios.post('deposit', data);
      console.log(response);
      this.isLoading = 'Confirm'
      this.alertSuccess = true
      } catch (e) {
        this.alertError = true
        this.isLoading = 'Confirm'
      }
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  getGreetingTime (m) {
      var g = null; //return g
      
      if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.
      
      var split_afternoon = 12 //24hr time to split the afternoon
      var split_evening = 17 //24hr time to split the evening
      var currentHour = parseFloat(m.format("HH"));
      
      if(currentHour >= split_afternoon && currentHour <= split_evening) {
        g = "afternoon";
      } else if(currentHour >= split_evening) {
        g = "evening";
      } else {
        g = "morning";
      }
      
      return g;
    },
};
</script>

<style scoped>
.sub-1 {
  font-size: 9px !important;
}
.sub {
  font-size: 10px !important;
}
.background {
  height: 90vh;
  background: url("../assets/backii.png");
  background-repeat: no-repeat;
  background-size: cover;
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
@media screen and (min-width: 425px) {
  .title-1 {
    display: none;
  }
}
@media screen and (max-width: 425px) {
  .greeting {
    display: none;
  }
  .title {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .v-subheader {
    padding: 0px !important;
  }
}
</style>
