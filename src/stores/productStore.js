import { defineStore } from 'pinia';
import api from "@/api.js";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        cart: [],
    }),
    getters: {
        filteredProducts: (state) => state.products.filter(product =>
            product.price < 100),
        totalPrice: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.count, 0),
    },
    actions: {
        async fetchProducts() {
            try {
                const response = await api.get('/products?limit=150');
                this.products = [...response.data.products];
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        addToCart(product) {
            const bestaatItem = this.cart.find(item => item.name === product.name);
            if (bestaatItem) {
                bestaatItem.count++;
            }
            else {
                this.cart.push({...product, count: 1});
            }
        },
        deleteProduct(index) {
            this.cart.splice(index,1);
        },
        deleteAll() {
            this.cart.splice(0,this.cart.length);
        },
    }
});