<template>
  <div class="container mt-5">
    <h1>Basisformulier</h1>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Naam</label>
        <input
            type="text"
            id="name"
            class="form-control"
            v-model="name"
            placeholder="Typ je naam"
        >
        <small class="form-text text-muted">Vul je volledige naam in.</small>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mailadres</label>
        <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            placeholder="Typ je e-mailadres"
        >
        <small class="form-text text-muted">Zorg voor een geldig e-
          mailadres.</small>
      </div>
      <button class="btn btn-primary mt-3" type="button"
              @click="submitForm">Verstuur</button>
    </form>
    <div v-if="submitted" class="mt-4">
      <h3>Inzending:</h3>
      <p>Naam: {{ name }}</p>
      <p>E-mailadres: {{ email }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('');
    const email = ref('');
    106
    const submitted = ref(false);
    const submitForm = () => {
      submitted.value = true;
    };
    return { name, email, submitted, submitForm };
  }
};
</script>