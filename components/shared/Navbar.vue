<template>
  <div id="nav_bar">
           <div class="top-menu">
            <SharedMenuCenter v-if="!pending" :Menus="Menus" />
          </div>
  </div>
</template>
<script setup>

onMounted(() => {
localStorage.setItem('currancy',"SAR")
});    
  
  watchEffect(() => {
  })
 
</script>

<style lang="scss">
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .sticky {
  position: fixed;
    @media (max-width: 767.98px) {
      position: absolute;
    }
  top: 0;
  width: 100%;
  z-index: 10000;
       .Categories{
    top: 48px !important;
    height: 400px !important;
  }
  .Brands{
    top: 48px !important;
    height: 400px !important;

  }
}
</style>