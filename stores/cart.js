
import {defineStore} from "pinia"

// const Products = await $fetch(`https://fakestoreapi.com/products`, {
//         //   baseURL: apiBase,
//           method: 'GET',
//         });
// await
let Products = [];
if (typeof window !== 'undefined') {    
const mainToken = localStorage.getItem('mainToken');

$fetch(`https://fakestoreapi.com/products`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${mainToken}`,
  },
})
  .then((response) => {
    Products = response;
  })
  .catch((error) => {
    console.error(error);
  });
}
export const useCartStore = defineStore('cart',{
  state:()=>( {
    cartContent : {},
  }),
  getters:{
   formatedCart(){
    return Object.keys(this.cartContent).map(ProductId => {
      const product = this.cartContent[ProductId];
      return{
        id :product.ProductId,
        image: Products.find((p) => p.id === product.ProductId).image,
        name: Products.find((p) => p.id === product.ProductId).title,
        price: Products.find((p) => p.id === product.ProductId).price,
        description: Products.find((p) => p.id === product.ProductId).description,
        quantity : product.quantity,
        coast : product.quantity * Products.find((p) => p.id === product.ProductId).price
      }
    })
   },
  total(){
    return Object.keys(this.formatedCart).reduce((acc,id) => {
      return acc + this.formatedCart[id].price * this.formatedCart[id].quantity;
    },0)
   },
  //  total(){
  //   return Object.keys(this.cartContent).reduce((acc,id) => {
  //     const product = Products.find(p => p.id === id);
  //     if(product){
  //       return acc + product.price * this.cartContent[id].quantity;
  //     }
  //     return acc + 0;
  //   },0)
  //  },
   totalProduct(){
    return Object.keys(this.cartContent).reduce((acc, id) => {
        return acc + this.cartContent[id].quantity;
     },0)
   },
  },
  actions:{
    savedata() {    
      window.localStorage.setItem('formatedCart',JSON.stringify(this.formatedCart));
      // window.localStorage.setItem('total',this.total);
      // window.localStorage.setItem('totalProduct',this.totalProduct);
  },
    add(ProductId){
      // console.log(ProductId)
        if(this.cartContent.hasOwnProperty(ProductId)){
          this.cartContent[ProductId] ={
            ProductId,
            quantity:  this.cartContent[ProductId].quantity +1,
          };
          this.savedata();
        }
        else{
          this.cartContent[ProductId] ={
            ProductId,
            quantity: 1,
          };
          this.savedata();
        }
    },
    addwithquantity(ProductId, quantity){
      // console.log(ProductId)
        if(this.cartContent.hasOwnProperty(ProductId)){
          this.cartContent[ProductId] ={
            ProductId,
            quantity:  this.cartContent[ProductId].quantity + quantity,
          };
          this.savedata();
        }
        else{
          this.cartContent[ProductId] ={
            ProductId,
            quantity: quantity,
          };
          this.savedata();
        }
    },
    remove(ProductId){
      if(!this.cartContent[ProductId]){
        return;
      }
      this.cartContent[ProductId].quantity -= 1;
      this.savedata();
      if(this.cartContent[ProductId].quantity === 0){
        delete this.cartContent[ProductId];
        this.savedata();
      }
    },
    removeProduct(ProductId){
      delete this.cartContent[ProductId];
      this.savedata();
    }
  }
})