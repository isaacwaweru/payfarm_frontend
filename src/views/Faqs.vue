<script>
 const item=[{question:"John", ans:"Doe"}];
 
</script>
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

      <router-link to="/signin" tag="span">
        <v-btn
          class="wdt_login_btn"
          color="#53C351"
          width="109"
          height="35"
          dark
        >
          <v-img
            class="login_svg"
            lazy-src="../assets/foot.svg"
            max-height="140"
            max-width="140"
            src="../assets/login-svg.svg"
          ></v-img>

          <span class="login_text">Login</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <div class="privacy_policy">
      <div class="privacy_Hero">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="fl-heading">
                <span class="fl-heading-text">FAQs</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="static-content">
        <div class="container">
          <div class="wdt_top_faq">
                <h5>Frequently Asked Questions(FAQs)</h5>
                <v-btn 
                  class="ma-2 wdt_btn_faq" 
                  outlined 
                  href="faqs.pdf"
                  download>
                      Download PDF
                </v-btn>

            </div>
          <div class="row">
            <div class="col-sm-12">
                <div class="wdt_accordian">
                        <v-expansion-panels>
                            <v-expansion-panel :key=1 class="mt-3">
                            <v-expansion-panel-header>
                                1.Can I use an Avatar instead of my real name?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                You must use oficial names and also give us an active email address
                            </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel :key=2 class="mt-3">
                            <v-expansion-panel-header>
                                2.Can I cancel my investment?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Once you've invested you can not cancel. Need to cancel? Contact us give us a reason.
                            </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel :key=3 class="mt-3">
                            <v-expansion-panel-header>
                                3.Can I  withdraw all to the funds from my wallet?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Yes posible to withdraw all your entire wallet balances without prejudice!
                            </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel :key=4 class="mt-3">
                            <v-expansion-panel-header>
                                4.How long does it take for funds to reflect to my wallet?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Upon successful deposit it only takes 15 seconds to reflect.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=5 class="mt-3">
                            <v-expansion-panel-header>
                                5.What is the maximum amount I can invest in PayFarm?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Min 10 dollars maxmum 1m dollars 
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=6 class="mt-3">
                            <v-expansion-panel-header>
                                6. How long does the investment take?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Your entire investment runs up to 120 days 16 weeks.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=7 class="mt-3">
                            <v-expansion-panel-header>
                                7.Are you fully licensed?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Yes, the Kenya Revenue Authority recognise paying farm limited for more information visit our terms of service meet our license number.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=8 class="mt-3">
                            <v-expansion-panel-header>
                                8.Is PayFarm tax obliged?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Payfarm is tax compliant and fully registered with KRA.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=9 class="mt-3">
                            <v-expansion-panel-header>
                                9. How long does it take for my chick to grow?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                The chick takes 16 weeks to grow.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=10 class="mt-3">
                            <v-expansion-panel-header>
                                10.What happens if I don't see my wallet reflecting? 
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Immediately contact us and we will be more than happy to assist.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=11 class="mt-3">
                            <v-expansion-panel-header>
                                11.If it happens I'm unable to withdraw what can I do?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Immediately contact us and we will be more than happy to assist.
                            </v-expansion-panel-content>
                            </v-expansion-panel>


                            <v-expansion-panel :key=12 class="mt-3">
                            <v-expansion-panel-header>
                                12.How much can I invest in payfarm?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                A customer is not limited since the company can pay out up to 5million dollars daily.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=13 class="mt-3">
                            <v-expansion-panel-header>
                                13.How many animals do you have in payfarm?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Currently we support 3 varieties which are chick, goats, cows and sheep.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :key=14 class="mt-3">
                            <v-expansion-panel-header>
                                14.How do I creat an account?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Simply go to sign up page and tap to continue.
                            </v-expansion-panel-content>
                            </v-expansion-panel>

                           <v-expansion-panel :key=15 class="mt-3">
                            <v-expansion-panel-header>
                                15.How do I withdraw from my wallet?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Simply go to withdraw icon tap and enter the amount you wish to withdraw it takes 4 seconds to withdraw to mpesa or bank.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                             <v-expansion-panel :key=16 class="mt-3">
                            <v-expansion-panel-header>
                                16.How do I deposit!?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Simply go to deposit tab indicated and enter the amount you wish to deposit and wait for the stk push to be sent. Ensure you give us the correct mobile operator in order to get the stk push.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                             <v-expansion-panel :key=17 class="mt-3">
                            <v-expansion-panel-header>
                                17.Is payfarm registered?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Yes payfarm is the product of paying farm limited. Visit our terms of service.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                             <v-expansion-panel :key=18 class="mt-3">
                            <v-expansion-panel-header>
                                18.What happens when your investments reach the 120 days?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                That's where your contract with payfarm ends if you wish to sponsor again feel free.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                </div>
            </div>
          </div>
        </div>
      </div>
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
	background: url("/src/assets/footer.png");
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
  
  
  
  
  
  @media screen and (max-width: 768px) {
	.heading p {
	  padding: 10px;
	}
	.heading {
	  font-size: 32px !important;
	}
  }
  @media screen and (max-width: 550px) {
	p {
	  line-height: 1rem !important;
	  padding: 5px 0px !important;
	  margin-bottom: 3px !important;
	}
	.heading {
	  font-size: 32px;
	}
	.subheading {
	  font-size: 16px !important;
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
