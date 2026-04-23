<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <!-- Header persistant sur toutes les pages, RouterView affiche la page active -->
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

/* Masque la scrollbar sur tous les navigateurs */
::-webkit-scrollbar { display: none; }
html { scrollbar-width: none; }

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
