<template>
  <div class="container mt-4">
    <button class="btn btn-success" @click="sendMessage">
      Stuur Bericht
    </button>
  </div>
</template>
<script>
import {eventBus} from '../utils/eventBus.js';
export default {
  setup() {
    const sendMessage = () => {
      eventBus.setMessage('Hallo van sender');
    }
    return {sendMessage}
  }
}
</script>