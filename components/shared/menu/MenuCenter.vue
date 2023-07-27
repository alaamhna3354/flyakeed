<template>
    <div class="menu-center">
      <div class="logo">
        <img
                      src="/icons/logo(1).png"
                    />
                    <span> {{$i18n.locale == 'ar' ? 'فلاي أكيد':'FlyAkeed'}} </span>
      </div>
   <div class="d-flex align-items-center">
     <div class="dropdown show" style="margin-inline-end: 50px;">
                <nuxt-link to="" class="drop dropdown-toggle"
                  >{{currancy}}</nuxt-link
                >
                <div class="dropdown-content p-0 m-0">
                  <a @click="changecurranc"
                    href="#"
                    class="list-group-item list-group-item-action d-flex py-3 dropdown-item"
                    ><img
                      src="/icons/Asset.png"
                      width="24"
                      height="24"
                      style="width: 24px"
                    />
                    <span style="padding-inline-start: 1rem">SAR</span></a
                  >
                  <a @click="changecurranc"
                    href="#"
                    class="list-group-item list-group-item-action d-flex py-3 dropdown-item"
                    ><img
                      src="/icons/british.png"
                      width="24"
                      height="24"
                      style="width: 24px"
                    />
                    <span style="padding-inline-start: 1rem">USD</span></a
                  >
                </div>
              </div>
     <div class="text-white">
                <nuxt-link @click="changeLanuage" to="" class="text-white" style="font-size: 16px;font-weight: 501;cursor: pointer;"
                  >
                 {{$i18n.locale == 'ar' ? 'English':'العربية'}}
                  </nuxt-link
                >
              </div>
   </div>
   <div class="d-flex">
         <button>Corporate</button>
         <button class="wh">Log In</button>

   </div>
    </div>
</template>

<script setup>
  const currancy = localStorage.getItem("currancy");
const changecurranc = () => {
  if (currancy === "SAR") {
    localStorage.setItem("currancy", "USD");
      return useRouter().go('/');
    
  } else {
    localStorage.setItem("currancy", "SAR");
    return useRouter().go('/');

  }
};
const changeLanuage = () => {
  const lang = localStorage.getItem("lang");
  if (lang === "ar") {
    localStorage.setItem("lang", "en");
      return useRouter().go('/');
    
  } else {
    localStorage.setItem("lang", "ar");
    return useRouter().go('/');

  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

.menu-center {
 background-color: $blue2;
 padding: 20px 100px;
 display: flex;
 justify-content: space-between;
 button{
   border-radius: 1px;
    background: #196dfb;
    width: 120px;
    height: 40px;
    text-align: center;
      color: #fff;
      margin-inline-end: 10px;
    &.wh{
    background: #fff;
      color: #196dfb;
    }
 }
 .logo{
   display: flex;
   align-items: center;
   img{
     width: 40px;
   }
   span{
     color: #fff;
font-size: 30px;
font-weight: bold;
   }
 }
 ul{
   width: 100%;
   list-style: none;
   margin: 0;
   display: flex;
   justify-content: space-around;
   li{
      transition: $transition;
        &:hover{
       margin-top: -5px;
       }
     a{
       color: #fff;
       font-weight: 154;
       &.router-link-exact-active{
       font-weight: bold;
      text-decoration: underline;
       }
     }
   }
 }
 .dropdown {
   width: 20%;
   text-align: end;
  position: relative;
  display: inline-block;
  &:hover {
    .dropdown-content {
      display: block;
    }
  }
  .drop {
    color: #fff;
  }
  .dropbtn {
    background-color: #aff5fd;
    color: #3a91b5;
    font-size: 16px;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    width: 100%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: $light-grey;
    min-width: 125px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    h5 {
      padding: 10px 10px;
      border-bottom: 2px solid $blue;
      color: $blue;
    }
    a {
      color: $blue;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      white-space: normal;
      font-size: 14px;
      &:hover {
        background-color: $blue;
        color: #fff;
      }
    }
  }
}
}
</style>
