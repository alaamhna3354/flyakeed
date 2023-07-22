<template>
  <!-- <section class="header-image w-100" :style="{ backgroundImage: `url(${src})` }"> -->
  <section class="header-image">
    <!-- <img src="/icons/fav.png"  height="30" alt=""> -->
    <h3 class="fw-bold">{{ title }}</h3>
  </section>
</template>

<script setup>
const {  title } = defineProps([ "title"]);
</script>

<style lang="scss" scoped>
 @import "~/assets/styles/scss/theme/variables";
// .header-image {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap:5px;
//   width: 100vw;
//   padding: 30px 0;
//   span {
//     font-size: 25px;
//     color: #000;
//   }
// }
</style>
