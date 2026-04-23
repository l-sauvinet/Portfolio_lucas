<template>
  <div class="veille-page">

    <div class="section-header">
      <span class="section-tag">&lt;veille /&gt;</span>
      <h1>Veille Technologique</h1>
      <div class="section-line"></div>
    </div>

    <div class="topics">

      <div class="topic" v-for="topic in topics" :key="topic.label">
        <div class="topic-title">
          <span class="topic-tag">{{ topic.tag }}</span>
          <h2>{{ topic.label }}</h2>
        </div>
        <div class="article-list">
          <a
            v-for="article in topic.articles"
            :key="article.url"
            :href="article.url"
            target="_blank"
            class="article-row"
          >
            <div class="article-body">
              <span class="article-source">{{ article.source }}</span>
              <span class="article-title">{{ article.title }}</span>
              <p class="article-desc">{{ article.desc }}</p>
            </div>
            <span class="article-arrow">→</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const topics = [
  {
    tag: '< vue.js />',
    label: 'Vue.js',
    articles: [
      {
        source: 'Vue School',
        title: 'Vue.js 2025 en revue et un aperçu de 2026',
        url: 'https://vueschool.io/articles/news/vue-js-2025-in-review-and-a-peek-into-2026/',
        desc: 'Un bilan complet de l\'évolution de Vue en 2025 : Vue 3.5, Pinia 3, Nuxt 4 et un aperçu du très attendu Vapor Mode qui supprime le Virtual DOM pour booster les performances.',
      },
    ],
  },
  {
    tag: '< ia />',
    label: 'IA & Développement',
    articles: [
      {
        source: 'The Pragmatic Engineer',
        title: 'Les outils IA pour développeurs en 2026',
        url: 'https://newsletter.pragmaticengineer.com/p/ai-tooling-2026',
        desc: 'En 2026, 85 % des développeurs utilisent l\'IA au quotidien. Cet article analyse l\'état des outils comme Cursor, Claude Code et GitHub Copilot, et leur impact réel sur les workflows de développement.',
      },
    ],
  },
  {
    tag: '< tendances />',
    label: 'Nouveautés du développement',
    articles: [
      {
        source: 'LogRocket',
        title: 'Les 8 tendances qui définiront le développement web en 2026',
        url: 'https://blog.logrocket.com/8-trends-web-dev-2026/',
        desc: 'LogRocket identifie les 8 grandes tendances du dev web en 2026 : architecture server-first, TypeScript généralisé, montée de WebAssembly, CSS natif et workflows agentiques pilotés par l\'IA.',
      },
    ],
  },
]
</script>

<style scoped>
.veille-page {
  padding: 60px 140px 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.section-tag {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #298421;
  letter-spacing: 0.05em;
}

.section-header h1 {
  font-size: 42px;
  color: #0C3808;
  margin: 0;
}

.section-line {
  width: 60px;
  height: 3px;
  background: #298421;
  border-radius: 2px;
}

.topics {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.topic {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.topic-title {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.topic-tag {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: #298421;
}

.topic-title h2 {
  font-family: 'KoHo', sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: #0C3808;
  margin: 0;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-row {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 32px;
  background: #fff;
  border: 1px solid rgba(12, 56, 8, 0.1);
  border-radius: 14px;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.article-row:hover {
  box-shadow: 0 4px 16px rgba(12, 56, 8, 0.09);
  transform: translateX(4px);
  border-color: rgba(41, 132, 33, 0.3);
}

.article-source {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #298421;
  background: rgba(41, 132, 33, 0.08);
  border: 1px solid rgba(41, 132, 33, 0.2);
  border-radius: 4px;
  padding: 4px 12px;
  white-space: nowrap;
  flex-shrink: 0;
}

.article-title {
  font-family: 'KoHo', sans-serif;
  font-size: 20px;
  color: #0C3808;
}

.article-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.article-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

.article-arrow {
  font-size: 22px;
  color: #298421;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.article-row:hover .article-arrow {
  transform: translateX(4px);
}

::-webkit-scrollbar { display: none; }
* { scrollbar-width: none; }
</style>
