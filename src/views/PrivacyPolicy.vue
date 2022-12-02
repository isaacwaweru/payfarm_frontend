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
                <span class="fl-heading-text"> Privacy Policy</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="static-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <p><strong class="privacy-policy-tutorial">Privacy policy introduction</strong> Payfarm limited the  <a href="https://www.payfarm.org">https://www.payfarm.org</a> website, which provides the SERVICE.This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Payfarm.org website.
                </p>
              <p><strong class="privacy-policy-tutorial">Our Service: </strong>
                If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
              
              <p>
                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at <a href="https://payfarm.org">https://payfarm.org</a> , unless otherwise defined in this Privacy Policy.
              </p>

              <h2>INFORMATION COLLECTION AND USE</h2>
              <p><strong class="privacy-policy-tutorial">For a better experience </strong> while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
             
              <h2>Log Data </h2>
              <p>DWe want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

              <h2>COOKIES</h2>
              <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.</p>
              <p>Our website uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>

              <h2>SERVICE</h2>
              <p> <strong>Service Providers</strong> 
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <p>To facilitate our Service;
                To provide the Service on our behalf;
                To perform Service-related services; or
                To assist us in analyzing how our Service is used.
                We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                </p>  

                <h2>SECURITY </h2>
                <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>

                <h2>CONTACT US</h2>
                <p>
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us  <br>
                    <a href="mailto:support@payfarm.org">support@payfarm.org</a> <br>
                    Give us a call at anytime  
                    <br><a href="tel:0202000115">0202000115</a> <br>
                    Or Live chat us.
                </p>

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
<style>
@import "../style.css";
</style>