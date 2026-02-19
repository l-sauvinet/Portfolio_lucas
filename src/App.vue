<script setup>
import Header from "./components/Header.vue";
import Description from "./components/Description.vue";
import Project from "./components/Project.vue";
import Synthese from "./components/Synthese.vue";
import Veille from "./components/Veille.vue";
</script>

<template>
  <div id="app">
    <Header />
    <Description />
    <Project />
    <Synthese />
    <Veille />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

#app {
   font-family: 'Montserrat', sans-serif;
}
</style>
