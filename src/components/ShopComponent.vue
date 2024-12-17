<template>
  <div class="row">
<!--    Hier komen meerdere productcards-->
    <h1>Shop</h1>
      <product-card
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :image="product.image"
          :color="product.color"
          @addToCart="handleAddToCart"
      />
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import {ref} from "vue";

export default {
  name: 'ShopComponent',
  components: {ProductCard},
  setup() {
    const products = ref ([
      { id: 1, name: 'Laptop', price: 999.99, image: require('@/img/img.png'), color: '#000000'},
      { id: 2, name: 'Telefoon', price: 499.99, image: require('@/img/img_1.png'), color: 'green'},
      { id: 3, name: 'Desktop', price: 699.99, image: require('@/img/img_2.png'), color: 'red'},
    ]);
    const cart = ref ([]);
    const handleAddToCart = (product) => {
      cart.value.push(product);
      console.log(cart);
    }
    return {cart,handleAddToCart,products}
  }
}
</script>