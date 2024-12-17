<template>
  <div class="container mt-5 text-center">
    <h1>Teller</h1>
    <h2>{{ counter.count }}</h2>
    <p>Verdubbelde waarde: {{ counter.doubleCount }}</p>
    <button class="btn btn-primary me-2" @click="counter.increment">+</button>
    <button class="btn btn-danger" @click="counter.decrement">-</button>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counterStore';

export default {
  setup() {
    const counter = useCounterStore();
    return { counter };
  }
};
</script>