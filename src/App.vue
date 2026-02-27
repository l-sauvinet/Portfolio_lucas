<script setup>
import Home from './components/Home.vue'
import Veille from "./components/Veille.vue";
import Header from "./components/Header.vue";
import Project from "./components/Project.vue";
import Synthese from "./components/Synthese.vue";
import Description from "./components/Description.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
  <div id="app">
    <CustomCursor />
    <Header />
    <Home/>
    <Description />
    <Project />
    <Synthese />
    <Veille />
  </div>
</template>

<style>
* {
  cursor: none !important;
  user-select: none;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

#app {
   font-family: 'Montserrat', sans-serif;
}
</style>