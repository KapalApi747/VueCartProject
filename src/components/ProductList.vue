<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h1>Producten</h1>
      <div>
        <button @click="deleteAll" class="btn btn-secondary">
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
    <p v-if="products.length === 0">Loading products...</p>
    <div v-else>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pb-4"
           v-for="product in products"
           :key="product.id"
      >
        <div class="card d-flex">
          <img :src="product.image" class="card-img-top" alt="product_image">
          <div class="card-body">
            <h3 class="card-title">{{ product.title }}</h3>
            <h5 class="card-text">{{ product.category }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text fs-2">€{{ product.price }}</p>
              <button class="btn btn-success btn-sm" @click="addToCart(product)">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mt-5">Winkelwagen</h2>
    <ul class="list-group">
      <li
          v-for="(item, index) in cart"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          {{ item.name }} - €{{ item.price }} x {{ item.count }} = €{{ item.price * item.count }}
        </div>
        <div>
          <div class="mx-3">
            <button @click="deleteProduct(index)" class="btn btn-danger">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </li>
      <div class="mt-5">
        <h2>Totaal Winkelwagen: €{{ productStore.totalPrice }}</h2>
      </div>
    </ul>
  </div>
</template>
<script>
import {useProductStore} from '../stores/productStore';
import {onBeforeMount} from "vue";

export default {
  setup() {
    const productStore = useProductStore();
    onBeforeMount(async () => {
      await productStore.fetchProducts(); // Ensures fetchProducts finishes
      console.log('Products after fetch:', productStore.products);
    });
    return {
      products: productStore.products,
      cart: productStore.cart,
      addToCart: productStore.addToCart,
      deleteProduct: productStore.deleteProduct,
      deleteAll: productStore.deleteAll,
      productStore,
    };
  }
};
</script>