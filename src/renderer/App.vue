<template>
  <div class="app-container">
    <div class="content">
      <img src="./assets/logo.png" alt="Logo" class="logo" />
      <hello-world />
    </div>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<style>
.app-container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.logo {
  height: 150px;
  margin-bottom: 20px;
}
</style>
