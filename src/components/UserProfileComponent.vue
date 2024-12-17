<template>
  <div>
    <h1>User Profile Pagina</h1>
    <p>Welkom op de User Profile pagina! Ik ben: {{route.params.id}}</p>
  </div>
</template>
<script>
import {useRoute} from "vue-router";

export default {
  name: 'UserProfileComponent',
  setup() {
    const route = useRoute();
    return {route}
  }
};
</script>