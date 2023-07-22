<template>
  <div class="footer">
    <div class="container">
      <div class="row">
      <div class="col-12 col-md-3">
        <div class="logo">
        <img
                      src="/icons/fav.png"
                    />
                    <span> {{$i18n.locale == 'ar' ? 'فلاي أكيد':'FlyAkeed'}} </span>
      </div>
      </div>
       <div class="col-12 col-md-3">
       <ul>
         <h5>FlyAkeed</h5>
         <li>About Us</li>
         <li>FlyAkeed for Business</li>
       </ul>
      </div>
 <div class="col-12 col-md-3">
       <ul>
         <h5>Support</h5>
         <li>Contact Us</li>
         <li>FAQ</li>
       </ul>
      </div>
      <div class="col-12 col-md-3">
       <ul>
         <h5>Legal</h5>
         <li>Terms and Conditions</li>
         <li>Privacy Policy</li>
       </ul>
      </div>
      
      <div class="col-12 col-md-4  mt-5">
        Call us at: 920000091 
      </div>
      <div class="col-12 col-md-8  mt-5">
         FlyAkeed © 2023 | All Rights Reserved 
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
.footer{
  padding: 20px 0;
   .logo{
   display: flex;
   align-items: center;
   img{
     width: 20px;
   }
   span{
     color: #00419d;
font-size: 30px;
font-weight: bold;
   }
 }
@media screen and (min-width: 1200px) {
 
}
}

</style>
