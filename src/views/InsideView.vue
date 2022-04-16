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
        <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Bahamas, The"
              value="bahamas"
            ></v-radio>
            <v-radio
              label="Bahrain"
              value="bahrain"
            ></v-radio>
            <v-radio
              label="Bangladesh"
              value="bangladesh"
            ></v-radio>
            <v-radio
              label="Barbados"
              value="barbados"
            ></v-radio>
            <v-radio
              label="Belarus"
              value="belarus"
            ></v-radio>
            <v-radio
              label="Belgium"
              value="belgium"
            ></v-radio>
            <v-radio
              label="Belize"
              value="belize"
            ></v-radio>
            <v-radio
              label="Benin"
              value="benin"
            ></v-radio>
            <v-radio
              label="Bhutan"
              value="bhutan"
            ></v-radio>
            <v-radio
              label="Bolivia"
              value="bolivia"
            ></v-radio>
            <v-radio
              label="Bosnia and Herzegovina"
              value="bosnia"
            ></v-radio>
            <v-radio
              label="Botswana"
              value="botswana"
            ></v-radio>
            <v-radio
              label="Brazil"
              value="brazil"
            ></v-radio>
            <v-radio
              label="Brunei"
              value="brunei"
            ></v-radio>
            <v-radio
              label="Bulgaria"
              value="bulgaria"
            ></v-radio>
            <v-radio
              label="Burkina Faso"
              value="burkina"
            ></v-radio>
            <v-radio
              label="Burma"
              value="burma"
            ></v-radio>
            <v-radio
              label="Burundi"
              value="burundi"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save   
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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

          <div class="action">GET IT DELIVERED</div>
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
      dialogm1: '',
      dialog: false,
    }
  },

  mounted() {
    this.$store.dispatch('getUser')
  },

  // async created() {
  //   const response = await axios.get('users');
  //   console.log('yo', response);
  // },

  methods: {
    handleClick() {
      this.$store.dispatch('deleteUser')
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
