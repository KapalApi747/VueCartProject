<template>
  <div class="container mt-4">
    <div class="alert alert-info">
      Ontvangen Bericht: {{ message }}
    </div>
  </div>
</template>
<script>
import {computed} from "vue";
import {eventBus} from '../utils/eventBus'
export default {
  setup() {
    const message = computed(() => eventBus.message);
    return {message}
  }
}
</script>