<template>
  <div class="container mt-5">
    <h1>Formuliervalidatie</h1>
    <form @submit.prevent="validateForm">
      <div class="mb-3">
        <label for="name" class="form-label">Naam</label>
        <input
            type="text"
            id="name"
            class="form-control"
            v-model="name"
            placeholder="Typ je naam">
        <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mailadres</label>
        <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            placeholder="Typ je e-mailadres">
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
      </div>
      <button class="btn btn-primary" type="submit">Verstuur</button>
    </form>
    <div v-if="submitted" class="mt-4">
      <h3>Succesvol verzonden!</h3>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const errors = ref({});
    const submitted = ref(false);
    const validateForm = () => {
      errors.value = {};
      if (!name.value.trim()) {
        errors.value.name = 'Naam is verplicht.';
      }
      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email = 'Geef een geldig e-mailadres.';
      }
      if (!Object.keys(errors.value).length) {
        submitted.value = true;
      }
    };
    return { name, email, errors, submitted, validateForm };
  }
};
</script>