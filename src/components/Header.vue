<template>
  <header class="site-header">
    <div class="container">
      <a class="logo-link" href="/">
        <img src="/assets/logo-p.svg" alt="Logo" class="logo" />
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a @click.prevent="scrollTop" href="#accueil">Accueil</a>
        <a @click.prevent="scrollTo('description')" href="#description">Description</a>
        <a @click.prevent="scrollTo('projet')" href="#projet">Projet</a>
        <RouterLink to="/parcours">Parcours</RouterLink>
        <RouterLink to="/veille">Veille</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Scroll vers le haut — navigue vers '/' si on n'y est pas déjà
function scrollTop() {
  if (route.path !== '/') {
    router.push('/').then(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Scroll vers une section par id — si on est sur une autre page, navigue d'abord
// Le setTimeout(100) laisse le temps au DOM de monter avant de chercher l'élément
function scrollTo(id) {
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    })
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.site-header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  box-sizing: border-box;
  box-shadow: 2px 4px 12px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 100;
  background: #f0f0f0;
}

.container {
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 75px;
  display: block;
}

.main-nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

.main-nav a,
.main-nav :deep(a) {
  color: #0C3808;
  text-decoration: none;
  font-size: 20px;
  padding: 6px 8px;
}

.main-nav a:hover,
.main-nav :deep(a):hover {
  color: #298421;
}
</style>
