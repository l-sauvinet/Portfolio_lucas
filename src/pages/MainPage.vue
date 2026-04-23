<template>
  <!-- Page d'accueil : hero + carousel de description + liste des projets -->
  <div>
    <Home />
    <Description />
    <Project />
  </div>
</template>

<script setup>
import Home from '../components/Home.vue'
import Description from '../components/Description.vue'
import Project from '../components/Project.vue'
</script>
