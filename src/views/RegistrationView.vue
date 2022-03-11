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

      <router-link to="/activate" tag="span">
        <v-btn color="#53C351" height="35" dark> Login </v-btn>
      </router-link>
    </v-app-bar>

    <div class="register pa-1">
      <v-layout column wrap class="mt-10">
        <v-flex xs10 md3>
          <div class="begin d-flex justify-center">
            <v-card class="form">
              <v-img
                lazy-src="../assets/r.svg"
                src="../assets/r.svg"
              ></v-img>
              <div class="form-1">
                <v-img
                  lazy-src="../assets/foot.svg"
                  src="../assets/avr.svg"
                ></v-img>
              </div>

              <div>
                <form class="ml-8 mr-8"
                v-on:submit.prevent="submitForm"
                >
                  <h4>Full Name</h4>
                  <v-text-field
                    v-model="fullname"
                    label="Enter Full Name"
                    required
                    outlined
                  ></v-text-field>
                  <h4>Email</h4>
                  <v-text-field
                    v-model="email"
                    label="Enter Email"
                    required
                    outlined
                  ></v-text-field>
                  <h4>Phone Number</h4>
                  <v-text-field
                    v-model="phone"
                    label="Phone Number"
                    required
                    outlined
                  ></v-text-field>
                  <h4>Password</h4>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    required
                    outlined
                  ></v-text-field>
                  <h4>Confirm Password</h4>
                  <v-text-field
                    v-model="confirmpassword"
                    label="Confirm Password"
                    required
                    outlined
                  ></v-text-field>
                  <v-checkbox label="Accept Terms" required></v-checkbox>
                  <v-btn class="mb-5" color="#556EE6" dark width="100%">
                    Register
                  </v-btn>

                  <div class="text">
                    <h4 class="pt-2 pb-3">
                      Have an account ?
                      <span style="color: #e1a11c">Login now</span>
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
export default {
  data() {
    return {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      confirmpassword: '',
      status: false,
      formIsValid: true
    }
  },
  methods: {
   submitForm() {
     console.log(this.fullname,this.email,this.password,this.confirmpassword)
     console.log("youu")
   }
  }
};
</script>

<style>
.register {
  height: 1000px;
  background: url("../assets/Frame.png");
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
