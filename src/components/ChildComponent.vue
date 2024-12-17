<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="card-text">
        Het huidige theme is: <span class="badge bg-info">{{ theme }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {inject} from "vue";

export default {
  setup() {
    const theme = inject ('theme');
    return {theme};
  }
}
</script>