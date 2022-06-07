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
        <v-btn color="#53C351" height="35" dark @click="handleClick">
          Log Out
        </v-btn>
      </div>
    </v-app-bar>

    <v-toolbar dense color="#0B0636" dark class="title-1">
      <v-subheader class="sub-1">
        <h2>My Farm Animals</h2>
      </v-subheader>

      <v-spacer></v-spacer>

      <v-subheader class="sub">
        <h2>Hello, {{ user.fullname.split(" ").slice(0, -1).join(" ") }}</h2>
      </v-subheader>
    </v-toolbar>

    <v-toolbar dense color="#0B0636" dark>
      <v-toolbar-title class="title">MY FARM ANIMALS</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="inv">
        <v-btn
          class="ma-2"
          small
          outlined
          @click.stop="investments = true"
          color="#fcb603"
          rounded
          >Investments</v-btn
        >

        <v-btn
          class="ma-2"
          small
          outlined
          @click.stop="trans = true"
          color="#f"
          rounded
          >Transactions</v-btn
        >
      </div>
      <v-subheader class="sub">
        <h2>Bal:{{ user.amount.toFixed(3) }}</h2>
      </v-subheader>
      <v-btn
        class="ma-2"
        small
        outlined
        @click.stop="dialog1 = true"
        color="#53C351"
        rounded
        >Withdraw</v-btn
      >
      <v-btn
        class="ma-2"
        v-bind="attrs"
        @click.stop="dialog = true"
        color="#53C351"
        small
        rounded
        >Deposit</v-btn
      >
    </v-toolbar>
    <v-toolbar class="unity" dense color="#0B0636" dark>
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2"
        small
        outlined
        @click.stop="investments = true"
        color="#fcb603"
        rounded
        >Investments</v-btn
      >

      <v-btn
        class="ma-2"
        small
        outlined
        @click.stop="trans = true"
        color="#fff"
        rounded
        >Transactions</v-btn
      >
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
            <div v-if="cart === 0">
              <h1
                style="
                  color: #231d4f;
                  font-weight: 500;
                  padding-top: 25px !important;
                "
                class="mt-6 ml-6"
              >
                No animal
                <span
                  style="color: #848199; font-weight: 300; font-size: 18px"
                ></span>
              </h1>
              <h2 style="color: #231d4f; font-weight: 500" class="ml-6">
                Buy animal now
              </h2>
            </div>
            <div v-if="cart !== 70 && cart !== 0">
              <h1
                style="
                  color: #231d4f;
                  font-weight: 500;
                  padding-top: 25px !important;
                "
                class="mt-6 ml-6"
              >
                You've added
                <span
                  style="color: #848199; font-weight: 300; font-size: 18px"
                ></span>
              </h1>
              <h2 style="color: #231d4f; font-weight: 500" class="ml-6">
                {{ cart }} Chicken
              </h2>
            </div>
            <div v-if="cart === 70">
              <h1
                style="
                  color: #231d4f;
                  font-weight: 500;
                  padding-top: 25px !important;
                "
                class="mt-6 ml-6"
              >
                Please now invest
                <span
                  style="color: #848199; font-weight: 300; font-size: 18px"
                ></span>
              </h1>
              <h2 style="color: #231d4f; font-weight: 500" class="ml-6">
                {{ cart }} Chicken
              </h2>
            </div>
            <v-divider width="250" class="ml-6" />
            <p
              style="
                color: #848199;
                font-weight: 5300;
                padding-top: 5px !important;
              "
              class="ml-6 mt-4"
            >
              <!-- Your chick is 3 months old -->
            </p>
            <v-img
              lazy-src="../assets/chicken/6.svg"
              max-height="300"
              max-width="300"
              src="../assets/chicken/6.svg"
              style="margin: auto !important"
              class="mt-16"
            ></v-img>
            <div class="center_all1">
              <h1 class="chick">{{ cart }}</h1>
            </div>
            <div class="center_all mt-16">
              <v-btn
                class="ma-2 mt-10"
                v-bind="attrs"
                @click="addToCart"
                color="black"
                small
                rounded
                width="90"
                ><v-icon dark color="white"> mdi-plus </v-icon></v-btn
              >
              <v-btn
                class="ma-2"
                v-bind="attrs"
                @click="removeFromCart"
                color="black"
                small
                rounded
                width="90"
              >
                <v-icon dark color="white"> mdi-minus </v-icon>
              </v-btn>
            </div>
          </div>
          <v-row class="ml-5">
            <v-col>
              <div class="action">
                <h3>Total: {{ investment }}</h3>
              </div>
            </v-col>
            <v-col>
              <v-btn
                small
                @click.stop="dialog2 = true"
                color="success"
                rounded
                >{{ feedAnimal }}</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
    </div>
    <!-- Deposit amount -->
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="600">
          <!-- kk -->
          <v-card>
            <v-toolbar class="pl-8" color="#53C351" dark
              >Deposit to your wallet</v-toolbar
            >
            <h5 class="ml-12 pt-1 mb-3 mt-2">Enter amount</h5>
            <form class="ml-8 mr-8" v-on:submit.prevent="submitForm">
              <v-text-field
                v-model="dialogm1"
                label="Amount"
                required
                outlined
                value="100"
                class="pl-4 pr-4"
                type="number"
              ></v-text-field>

              <v-alert v-if="alertSuccess" type="success">
                Request sent! Please check your phone!
              </v-alert>

              <v-btn type="submit" color="#e1a11c" dark class="ml-4">
                {{ isLoading }}
              </v-btn>
            </form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="
                  dialog = false;
                  dialogm1 = null;
                  alertSuccess = false;
                "
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
          <!-- kk end -->
        </v-dialog>
      </v-row>
    </template>

    <!-- Withdraw from the system -->
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog1"
          transition="dialog-top-transition"
          max-width="600"
        >
          <v-card>
            <v-toolbar class="pl-4" color="#53C351" dark
              >Withdraw to M-pesa</v-toolbar
            >
            <h5 class="ml-8 pt-1 mb-3 mt-2">
              Enter the amount you want to withdraw
            </h5>
            <form class="ml-3 mr-8" v-on:submit.prevent="withDraw">
              <v-text-field
                v-model="amount"
                label="Amount"
                required
                outlined
                value="100"
                class="pl-4 pr-4"
                type="number"
              ></v-text-field>

              <v-alert v-if="alertFailed1" type="error">
                Sorry! You cannot withdraw amount less than KES 10!
              </v-alert>

              <v-alert v-if="alertFailed" type="error">
                Sorry! You have insuffient funds!
              </v-alert>

              <v-alert v-if="alertWithdrawSuccess" type="success">
                Request sent! Please wait the SMS confirmation
              </v-alert>

              <v-btn type="submit" color="#e1a11c" dark class="ml-4">
                {{ isLoading }}
              </v-btn>
            </form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="
                  dialog1 = false;
                  alertFailed = false;
                  alertFailed1 = false;
                  amount = null;
                  alertWithdrawSuccess = false;
                "
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>

    <!-- Checkout animal now -->
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog2"
          transition="dialog-top-transition"
          max-width="600"
        >
          <v-card>
            <v-toolbar class="pl-8" color="#e1a11c" dark
              >Checkout Summary</v-toolbar
            >
            <h3
              style="
                color: #231d4f;
                font-weight: 500;
                padding-top: 10px !important;
              "
              class="mt-2 ml-12"
            >
              Animal growth period
              <span style="color: #848199; font-weight: 300; font-size: 18px">
                <v-btn text @click="dialog3 = true" color="#0b4cd9">
                  see more
                </v-btn>
              </span>
            </h3>
            <h3 class="pl-3 pt-1 mb-3 ml-9">Subtotal KSH:{{ investment }}</h3>
            <form class="ml-8 mr-8" v-on:submit.prevent="checkOutNow">
              <v-alert v-if="alertSuccess1" type="success">
                Success! You invested!
              </v-alert>
              <v-alert v-if="alertError2" type="error">
                Sorry you cannot invest 0 chicken
              </v-alert>
              <v-alert v-if="alertError" type="error">
                <v-row align="center">
                  <v-col class="grow">
                    Sorry! You have insuffient funds!
                  </v-col>
                  <v-col class="shrink">
                    <v-btn
                      @click="
                        dialog2 = false;
                        dialog = true;
                        alertError = false;
                      "
                      color="#53C351"
                      dark
                      >Deposit now</v-btn
                    >
                  </v-col>
                </v-row>
              </v-alert>
              <v-btn type="submit" color="#e1a11c" dark class="ml-4">
                {{ confirm }}
              </v-btn>
            </form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="
                  dialog2 = false;
                  alertSuccess1 = false;
                  alertError = false;
                  investment = null;
                  alertError2 = false;
                  investment = 0;
                  cart = 0;
                "
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <!-- Terms of your investments -->
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog3" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> Animal investment </v-card-title>

            <v-card-text>
              You are subjected to withdraw your funds as low as KES 100 at
              anytime. Your entire investment will run upto 16weeks.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog3 = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <!-- Transactions -->
    <template>
      <v-row justify="center">
        <v-dialog scrollable v-model="trans" max-width="600">
          <v-card>
            <v-toolbar class="pl-5" color="#231d4f" dark
              >Transaction History</v-toolbar
            >
            <v-card-text style="height: 300px">
              <v-text v-if="user.transactions.length === 0">
                No transactions
              </v-text>
              <v-list-item
                v-for="transaction in this.user.transactions.slice().reverse()"
                :key="transaction.time"
              >
                <v-list-item-content>
                  <v-list-item-title
                    ><h4
                      :class="{
                        red: transaction.trans_type === 'Withdraw',
                        green: transaction.trans_type !== 'Withdraw',
                      }"
                    >
                      {{ transaction.trans_type }}
                      <span style="color: #53c351"
                        >Kes:{{ transaction.amount }}</span
                      >
                    </h4></v-list-item-title
                  >
                  <v-list-item-subtitle>{{
                    transaction.time | moment("MMMM Do, h:mm a")
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-end">
              <v-btn color="#231d4f" text @click="trans = false"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <!-- Investments -->
    <template>
      <v-row justify="center">
        <v-dialog scrollable v-model="investments" max-width="600">
          <v-card>
            <v-toolbar class="pl-5" color="#fcb603" dark
              >Your Investments</v-toolbar
            >
            <v-card-text style="height: 300px">
              <v-text v-if="user.investments.length === 0">
                No investments
              </v-text>
              <v-list-item
                v-for="investment in this.userUpdate.slice().reverse()"
                :key="investment.time"
              >
                <v-list-item-content>
                  <v-list-item-title
                    ><h4>
                      {{ investment.investment }}
                    </h4></v-list-item-title
                  >
                  <v-list-item-subtitle>
                    <p
                      v-if="dateDifference(investment.time) !== 120"
                      class="green"
                    >
                      Active
                      <span style="color: #969997"
                        >Invested:
                        {{ investment.time | moment("MMMM Do, h:mm a") }}</span
                      >
                    </p>
                    <p
                      v-if="dateDifference(investment.time) === 120"
                      class="red"
                    >
                      Complete
                      <span style="color: #969997"
                        >Invested:
                        {{ investment.time | moment("MMMM Do, h:mm a") }}</span
                      >
                    </p>
                    <p>
                      Due: {{ investment.dueDate | moment("MMMM Do, h:mm a") }}
                    </p>
                    <p>
                      Your chicken is
                      <span style="color: #231d4f; font-size: 16px"
                        >{{ dateDifference(investment.time) }} days
                      </span>
                      old
                    </p>
                  </v-list-item-subtitle>
                  <v-row>
                    <v-col
                      ><v-img
                        v-if="dateDifference(investment.time) === 0"
                        lazy-src="../assets/chicken/0.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/0.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else-if="dateDifference(investment.time) === 1"
                        lazy-src="../assets/chicken/1.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/1.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else-if="dateDifference(investment.time) === 2"
                        lazy-src="../assets/chicken/2.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/2.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else-if="dateDifference(investment.time) === 3"
                        lazy-src="../assets/chicken/3.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/3.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else-if="dateDifference(investment.time) === 4"
                        lazy-src="../assets/chicken/4.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/4.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else-if="dateDifference(investment.time) === 5"
                        lazy-src="../assets/chicken/5.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/5.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else-if="dateDifference(investment.time) === 6"
                        lazy-src="../assets/chicken/6.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/6.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                      <v-img
                        v-else
                        lazy-src="../assets/chicken/6.svg"
                        max-height="150"
                        max-width="150"
                        src="../assets/chicken/6.svg"
                        style="margin: auto !important"
                        class="mt-16"
                      ></v-img>
                    </v-col>
                    <v-col
                      ><v-form
                        v-if="
                          investment.collect[0].day ===
                            dateDifference(investment.time).toString() &&
                          investment.collect[0].day !== zero
                        "
                        v-on:submit.prevent="
                          collectNow(
                            investment.index,
                            dateDifference(investment.time)
                          )
                        "
                      >
                        <v-btn type="submit" class="ma-2" color="success">
                          Collect
                        </v-btn>
                      </v-form></v-col
                    >
                  </v-row>
                  <v-divider></v-divider>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-end">
              <v-btn color="#fcb603" text @click="investments = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import Lottie from "../LottieView.vue";
import animationData2 from "../assets/feed.json";
import axios from "axios";
import { mapGetters } from "vuex";
import { setTimeout } from "timers-browserify";

export default {
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      zero: "0",
      index: "",
      mobile: { animationData: animationData2 },
      animationSpeed: 3,
      phone: "",
      amount: "",
      location: "",
      feedAnimal: "Checkout",
      cart: 0,
      chicken: null,
      investment: 0,
      isLoading: "Confirm",
      alertSuccess: false,
      alertSuccess1: false,
      alertError: false,
      alertError2: false,
      feedNow: true,
      dialogm1: "",
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      investments: false,
      trans: false,
      alertFailed: false,
      alertFailed1: false,
      alertWithdrawSuccess: false,
      confirm: "Confirm",
      today: new Date(),
    };
  },
  async mounted() {
    try {
      const response = await axios.get("user");
      console.log(response.data);
      this.$store.dispatch("user", response.data);
    } catch (error) {
      console.log(error);
      this.$router.push("/signin");
    }
  },
  methods: {
    dateDifference(first) {
      return Math.round((this.today - first) / (1000 * 60 * 60 * 24));
    },
    dateFormat(v) {
      return (v) => {
        let format = (d) =>
          d.toString().replace(/\w+ (\w+) (\d+) (\d+).*/, "$2 $1, $3");
        return format(new Date(v));
      };
    },
    async updateInvestment() {
      const data = {
        userid: user._id,
      };
      try {
        const response = await axios.post("investmentUpdate", data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async loadUser() {
      try {
        const response = await axios.get("user");
        console.log(response.data);
        this.$store.dispatch("user", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/signin");
      }
    },
    handleClick() {
      this.$store.dispatch("deleteUser");
      localStorage.removeItem("token");
      this.$router.push("/signin");
    },
    async submitForm() {
      this.isLoading = "Please wait...";
      const phone = "254" + this.user.phone.substring(1).trim();
      const data = {
        phone: phone,
        amount: this.dialogm1,
      };
      try {
        const response = await axios.post("deposit", data);
        console.log(response);
        this.isLoading = "Confirm";
        this.alertSuccess = true;
        this.feedNow = false;
        // setTimeout(this.loadUser, 30000);
        setTimeout(
          function () {
            this.loadUser();
          }.bind(this),
          20000
        );
      } catch (e) {
        this.alertError = true;
        this.isLoading = "Confirm";
      }
    },
    async withDraw() {
      if (this.amount < 10) {
        this.alertFailed1 = true;
        this.alertFailed = false;
        this.alertWithdrawSuccess = false;
      } else if (this.amount > this.user.amount) {
        this.alertFailed = true;
        this.alertFailed1 = false;
        this.alertWithdrawSuccess = false;
      } else {
        // Make withdraw request
        this.isLoading = "Please wait...";
        const phone = "254" + String(this.user.phone).slice(-9).trim();
        const data = {
          phone: phone,
          amount: this.amount,
        };
        try {
          const response = await axios.post("b2c", data);
          console.log(response);
          this.isLoading = "Confirm";
          this.alertWithdrawSuccess = true;
          this.feedNow = false;
          this.amount = "";
          this.alertFailed = false;
          this.alertFailed1 = false;
          setTimeout(
            function () {
              this.loadUser();
            }.bind(this),
            10000
          );
        } catch (e) {
          this.alertError = true;
          this.isLoading = "Confirm";
        }
      }
    },
    addToCart() {
      if (this.cart !== 70) {
        this.cart++;
        this.investment = this.cart * 1000;
      }
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart--;
        this.investment = this.cart * 1000;
        this.alertError = false;
      }
    },
    async checkOutNow() {
      if (
        this.user.amount < this.investment &&
        this.user.amount !== this.investment
      ) {
        this.alertError = true;
        this.alertError2 = false;
        this.alertSuccess1 = false;
      } else if (this.cart == 0) {
        this.alertError2 = true;
      } else {
        const referralData = {
          referralOne: this.user.referral.level_one,
          referralTwo: this.user.referral.level_two,
          referralThree: this.user.referral.level_three,
        };
        const data = {
          userid: this.user._id,
          investment: `${this.cart} Chicken @ Kes ${this.investment}`,
          amount: this.investment,
          status: "Active",
          referrals: referralData,
          collect: [
            {
              day: "1",
              status: "complete",
            },
          ],
        };
        this.confirm = "Please wait...";
        try {
          const response = await axios.post("investment", data);
          console.log(response);
          this.alertSuccess1 = true;
          this.alertError = false;
          this.confirm = "Confirm";
          this.investment = 0;
          this.cart = 0;
          this.loadUser();
        } catch (e) {
          this.alertError = true;
          this.isLoading = "Confirm";
        }
      }
    },
    async collectNow(index, day) {
      const dayUpdate = day + 1;
      const data = {
        userid: this.user._id,
        index: index,
        collect: [
          {
            day: dayUpdate.toString(),
            status: "complete",
          },
        ],
      };
      try {
        const response = await axios.post("investmentUpdate", data);
        console.log(response);
        this.loadUser();
      } catch (e) {
        this.alertError = true;
        this.isLoading = "Confirm";
      }
    },
    setIndex(items) {
      for (let i = 0; i < items.length; i++) {
        items[i].index = i;
      }
      return items;
    },
  },
  computed: {
    ...mapGetters(["user", "iduser"]),
    userUpdate() {
      let newuser = this.user;
      if (newuser) {
        return this.setIndex(newuser.investments);
      } else return newuser;
    },
  },
};
</script>

<style scoped>
.red {
  color: #f5ce42 !important;
  background-color: white !important;
}
.green {
  color: green;
  background-color: white !important;
}
.chick {
  font-size: 50px;
}
.center_all {
  position: absolute;
  top: 50%;
  left: 30%;
}
.center_all1 {
  position: absolute;
  top: 47%;
  left: 50%;
}
.sub-1 {
  font-size: 9px !important;
}
.sub {
  font-size: 10px !important;
}
.background {
  height: 1100px !important;
  background: url("../assets/backii.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-1 {
  height: 450px;
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
  position: relative;
}
.action {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}
@media screen and (min-width: 641px) {
  .title-1 {
    display: none;
  }
  .unity {
    display: none;
  }
}
@media screen and (max-width: 801px) {
  .greeting {
    display: none;
  }
  .title {
    display: none;
  }
  .inv {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .v-subheader {
    padding: 0px !important;
  }
  .inv {
    display: none;
  }
}
</style>
