<template>
  <div>
    <h1>Dashboard</h1>
    <div class="d-flex">
      <router-link to="profile">Profile</router-link>
      <span>&gt;</span>
      <router-link to="settings">Settings</router-link>
    </div>
    <router-view class="border border-1 rounded-3 border-black"/>
  </div>
</template>
<script>
export default {
  name:'DashboardComponent',
}
</script>