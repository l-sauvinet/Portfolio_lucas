<template>
  <header class="site-header">
    <div class="container">
      <a class="logo-link" href="/">
        <img src="/assets/logo-p.svg" alt="Logo" class="logo" />
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="#accueil">Accueil</a>
        <a href="#description">Description</a>
        <a href="#projet">Projet</a>
        <a href="#veille">Veille</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

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
  position: relative;
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

.main-nav a {
  color: #0C3808;
  text-decoration: none;
  font-size: 20px;
  padding: 6px 8px;
}

.main-nav a:hover {
  color: #298421;
}
</style>
