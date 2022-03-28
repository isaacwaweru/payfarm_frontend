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
            <v-card :class="{
                    'form-mobile mt-1 mr-1 ml-1 mb-1':
                      $vuetify.breakpoint.smAndDown,
                    'form': $vuetify.breakpoint.mdAndUp,
                  }">
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
              <div>
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
      alertSuccess: false,
    }
  }
};
</script>

<style>
.signin {
  height: 900px;
  background: url("../assets/Frame.png");
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
