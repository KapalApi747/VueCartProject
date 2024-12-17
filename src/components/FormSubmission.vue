<template>
  <div class="container mt-5">
    <h1>Formulierinzending</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Naam</label>
        <input
            type="text"
            id="name"
            class="form-control"
            v-model="formData.name"
            placeholder="Typ je naam">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mailadres</label>
        <input
            type="email"
            id="email"
            class="form-control"
            v-model="formData.email"
            placeholder="Typ je e-mailadres">
      </div>
      <button class="btn btn-primary" type="submit">Verstuur</button>
    </form>
    <div v-if="response" class="mt-4 alert alert-success">
      {{ response }}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const formData = ref({ name: '', email: '' });
    const response = ref('');
    const submitForm = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData.value)
            });
        if (res.ok) {
          response.value = 'Formulier succesvol verzonden!';
        }
      } catch (error) {
        response.value = 'Er is een fout opgetreden.';
      }
    };
    return { formData, response, submitForm };
  }
};
</script>