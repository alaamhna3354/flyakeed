<template>
  <div class="footer footer-wrapper hidden-print">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 mb70">
          <div style="display: inline-block; width: 63%; vertical-align: top">
            <div class="logo">
              <img src="/icons/fav.png" />
              <span>
                {{ $i18n.locale == "ar" ? "فلاي أكيد" : "FlyAkeed" }}
              </span>
            </div>
            <div class="mt50 footer-card">
              <i class="card-type visa"></i>
              <i class="card-type mastercard"></i>
              <i class="card-type mada light"></i>
              <i class="card-type applepay"></i>
            </div>
            <!--<p class="mt20">Saudi Riyals</p>	        <p class="mt20">العربية</p>-->
          </div>
          <!--<div style="display: inline-block;width: 35%; vertical-align: top;">			<a href="https://www.worldtravelawards.com/profile-43913-flyakeed" style="opacity: 1 !important; margin: 0 -5px;">				<i class="wta-img"></i>            </a>		</div>-->
        </div>
        <div class="col-sm-2 footer-lists">
          <div class="no-padding footer-item">
            <span data-i18n="footer.flyakeed">FlyAkeed</span>
          </div>
          <div class="no-padding footer-links">
            <a
              href="aboutus.html"
              onclick="showakeed('app1');"
              data-i18n="footer.aboutus"
              data-target="aboutus"
              id="btn-aboutus-back"
              >About Us</a
            >
            <!--<div style="margin-top: 5px;">                <a data-i18n="tools.hotels" id="btn-fa-hotels">                </a>            </div>-->
            <div style="margin-top: 15px">
              <a
                href="https://flyakeed.com/business/"
                data-i18n="footer.business"
                style="background: transparent"
                id="btn-business-back"
                >FlyAkeed for Business</a
              >
            </div>
          </div>
        </div>
        <div class="col-sm-2 footer-lists">
          <div class="no-padding footer-item">
            <span data-i18n="footer.support">Support</span>
          </div>
          <div class="no-padding footer-links">
            <a
              href="contact.html"
              data-i18n="footer.contactus"
              data-target="contact"
              id="btn-contact-back"
              >Contact Us</a
            >
          </div>
          <div class="no-padding footer-links" style="margin-top: 15px">
            <a
              href="faqs.html"
              data-i18n="footer.faq"
              data-target="faqs"
              id="btn-faq-back"
              >FAQ</a
            >
          </div>
        </div>
        <div class="col-sm-2 footer-lists">
          <div class="no-padding footer-item">
            <span data-i18n="footer.legal">Legal</span>
          </div>
          <div class="no-padding footer-links">
            <a
              href="terms.html"
              data-i18n="footer.terms"
              data-target="terms"
              id="btn-terms-back"
              >Terms and Conditions</a
            >
          </div>
          <div class="no-padding footer-links" style="margin-top: 15px">
            <a
              href="privacy.html"
              data-i18n="footer.policy"
              data-target="privacy"
              id="btn-privacy-back"
              >Privacy Policy</a
            >
          </div>
        </div>
        <div class="col-sm-2 footer-lists">
          <div class="no-padding footer-item" data-i18n="footer.download">
            Download
          </div>
          <div class="footerLinks mb10">
            <a
              href="https://itunes.apple.com/app/id988581688"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="appstore"></i>
            </a>
          </div>
          <div class="footerLinks">
            <a
              href="https://play.google.com/store/apps/details?id=com.leandiv.flyakeed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="googleplay"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footerWrapperv2">
    <div class="container">
    <div class="row">
      <div class="col-sm-12 no-padding col-md-4 mt15">
        <!--<i class="call"></i>-->
        <span class="callUs font15" data-i18n="footer.callus">Call us at:</span>
        <span class="callUs font15"> 920000091 </span>
      </div>
      <div class="col-sm-12 no-padding text-center col-md-4 mt15">
        <span class="callUs font15">FlyAkeed © 2023 | All Rights Reserved</span>
      </div>
      <div class="col-sm-12 no-padding col-md-4 text-right mt5">
        <a
          href="https://twitter.com/FlyAkeed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/flyakeed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/flyakeed/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/flyakeed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="linkedin"></i>
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.footer {
  padding: 20px 0;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 20px;
    }
    span {
      color: #00419d;
      font-size: 30px;
      font-weight: bold;
    }
  }
  @media screen and (min-width: 1200px) {
  }
}
</style>
