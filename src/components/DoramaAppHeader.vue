<template>
  <header class="app-header">
    <h1>Dorama World</h1>
    <nav>
      <router-link to="/">Apresentação </router-link>
      <router-link to="/about">By </router-link>
      <router-link to="/contact"> My Doramas</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DoramaAppHeader'
}
</script>

<style scoped>
.app-header {
  background-color: #0d9d72;
  color: white;
  padding: 10px;
  text-align: center;
}
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>
