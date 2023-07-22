<template>
  <div
                  class="card-product"
                  data-aos="zoom-out"
                  data-aos-offset="300"
                  data-aos-duration="2000"
                  >
                  <NuxtLink :to="`/products/${item.id}`">
                    <div class="image">
                      <ElementsImage
                        :classes="['custom-image']"
                        :src="apiBase+'/'+item.productImageUrl"
                        :width="`70`"
                        :height="`100`"
                      /></div
                  ></NuxtLink>
                  <div class="card-info">
                    <NuxtLink :to="`/products/${item.id}`"
                      ><h5 class="truncate">
                       {{$i18n.locale == 'ar' ? item.nameAr:item.nameEn}}
                      </h5></NuxtLink
                    >
                    <!-- <NuxtLink :to="`/products/${item.id}`"
                      ><p
                        class="discription"
                        v-html="$i18n.locale == 'ar' ? item.descriptionAr:item.descriptionEn"
                      ></p
                    ></NuxtLink> -->

                    <div
                      class="d-flex align-items-center justify-content-around mt-2"
                    >
                     <div v-if="isAuth.isAuthenticated">
                      <h4 v-if="accountType == 'Company'" class="price">{{ currency.symbol + " " + item.wholesalePrice }}</h4>
                      <h4 v-else class="price">{{ currency.symbol + " " + item.retailPrice }}</h4>
                     </div>
                    </div>
                     <div
                      class="d-flex align-items-center justify-content-around mt-2"
                    >
                      <ElementsAddToCart :product="item" :price="accountType == 'Company' ? item.wholesalePrice :item.retailPrice" :qty="0" :isDetails="false" />
                  </div>
                  </div>
                </div>
</template>

<script setup>
const { apiBase } = useRuntimeConfig();
const { item} = defineProps(["item"]);
const isAuth = useAuth().value;
const currency = useCurrency().value;
  const accountType = useAccountType()
const showAlert = ref(false);
const showAlertfun = () => {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
 .card-product {
    cursor: pointer;
    // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: #f6f9fd;
    position: relative;
    overflow: hidden;
    // height: 300px;
    // text-align: center;
    // margin: 20px 0;
    transform: scale(1.02, 1.02);
    &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
      transform: scale(1.02, 1.02);
    }
      .discount {
    position: absolute;
    top: -2px;
    right: -2px;
    background-color: #fbe506;
    color: #ae0804;
    padding: 5px 20px;
    // border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
  }
    .image {
      padding: 5px;
      img{
        object-fit: contain;
      }
      height: 200px;
      .custom-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .slug {
      position: absolute;
      top: -2px;
      left: -2px;
      background-color: $green;
      color: #fff;
      padding: 5px 20px;
      border-top-left-radius: 35px;
      border-bottom-right-radius: 35px;
    }
    .card-info {
      // background-color: $green;
      text-align: center;
      padding: 10px 30px;
      // height: 30%;
      .discription {
        height: 20px;
        overflow: hidden;
      }
      h5 {
        color: $green2;
        font-size: 1.1rem;
        margin: 0;
      }
      p {
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: auto;
        font-size: 0.8rem;
      }
      .old-price{
        margin: 0;
        font-size: 1rem;
        text-decoration: line-through;
      }
      .price {
        color: $blue;
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
      }
      .cart-shop {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 10px;
        width: 70px;
        padding: 2px;
        background: #fff;
        color: #000;
        &:hover {
          color: $green;
        }
        .counter,
        svg {
          color: $green;
        }
        svg {
          font-size: 14px;
          transition: $transition;
          &:hover {
            scale: 1.2;
          }
        }
        img {
          margin: 0;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
.truncate {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
</style>
