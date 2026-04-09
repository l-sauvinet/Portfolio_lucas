<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
* {
  user-select: none;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none;
}

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
