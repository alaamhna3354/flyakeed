<template>
  <!-- <section class="header-image w-100" :style="{ backgroundImage: `url(${src})` }"> -->
  <section class="header-image">
    <span class=" fw-bold">{{ title }}</span>
  </section>
</template>

<script setup>
const {  title } = defineProps([ "title"]);
</script>

<style lang="scss" scoped>
 @import "~/assets/styles/scss/theme/variables";
.header-image {
  text-align: center;
  width: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
  height: 70px;
  // background-color: red;
  // margin-top: 0.1rem;
  span {
    font-size: 25px;
    background: $green;
    height: 100%;
    padding: 2px 50px 20px;
    color: white;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
}
</style>
