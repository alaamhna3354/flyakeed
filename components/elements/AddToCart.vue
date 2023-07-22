<template>
  <div>
    <button
      v-if="isDetails"
      class="add"
      @click.prevent="addToCart(product,price,qty)"
    >
      Add To Cart
    </button>
    <div
      v-if="!isDetails"
      class="cart-shop"
      @click.prevent="addToCart(product,price,qty)"
    >
      <span>Add</span>
     <font-awesome-icon :icon="['fas', 'cart-shopping']" />
    </div>
  </div>
</template>

<script setup>

const { product, isDetails, qty,price } = defineProps([
  "product",
  "isDetails",
  "qty",
  "price"
]);
const addToCart = (item,pri,qt) => {
  useShoppingCartComposable().addToCart(item,pri,qt);
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.add {
    border: 1px solid $blue;
    color: white;
    background-color: $blue;
    padding: 5px 15px;
}
.cart-shop {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  width: 100px;
  padding:5px 10px;
  color: $blue;
  border: 2px solid $blue;
  transition: $transition;
  background-color: #fff;
  &:hover {
    color:  #fff;
  background-color: $blue;
    svg {
    color:  #fff;
      
    }
  }
  svg {
    font-size: 14px;
    transition: $transition;
    color: $blue;
    &:hover {
      scale: 1.2;
    }
  }
  img {
    margin: 0;
    width: 15px;
    height: 15px;
  }
}
</style>
