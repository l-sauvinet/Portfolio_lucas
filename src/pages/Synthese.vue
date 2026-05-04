<template>
  <div class="synthese-page">

    <div class="section-header">
      <span class="section-tag">&lt;synthèse /&gt;</span>
      <h1>Synthèse</h1>
      <div class="section-line"></div>
    </div>

    <div class="page-content">

      <!-- Colonne gauche : image du tableau de synthèse Excel -->
      <aside class="synthese-panel">
        <div class="panel-header">
          <span class="section-tag">&lt;tableau /&gt;</span>
          <h2>Tableau de synthèse</h2>
        </div>
        <embed
          src="/assets/tableau%20de%20synthese%20-%20Sauvinet%20lucas.pdf"
          type="application/pdf"
          class="synthese-pdf"
        />
        <a
          href="/assets/tableau%20de%20synthese%20-%20Sauvinet%20lucas.pdf"
          download="tableau de synthese - Sauvinet lucas.pdf"
          class="download-btn"
        >
          Télécharger le tableau de synthèse
        </a>
      </aside>

      <!-- Colonne droite : timeline avec scolaire à gauche et pro à droite de l'axe -->
      <div class="timeline-area">

        <div class="tl-col-headers">
          <div class="tl-col-label">Scolaire</div>
          <div class="tl-axis-spacer"></div>
          <div class="tl-col-label">Professionnel</div>
        </div>

        <div class="timeline">

          <!-- Bac STI2D -->
          <div class="tl-left">
            <div class="tl-card school">
              <span class="tl-type">Formation</span>
              <h3>Bac STI2D <span class="tl-option">option SIN</span></h3>
              <p class="tl-place">Lycée René Perrein — Ugine</p>
              <span class="tl-date">2020 – 2023</span>
            </div>
          </div>
          <div class="tl-axis"><div class="tl-dot"></div></div>
          <div class="tl-right"></div>

          <!-- BTS Ecoris + Alternance -->
          <div class="tl-left">
            <div class="tl-card school">
              <span class="tl-type">Formation</span>
              <h3>BTS SIO SLAM</h3>
              <p class="tl-place">Ecoris</p>
              <span class="tl-date">Sept. 2023 – Déc. 2023</span>
            </div>
          </div>
          <div class="tl-axis"><div class="tl-dot dual"></div></div>
          <div class="tl-right">
            <div class="tl-card pro">
              <span class="tl-type">Alternance</span>
              <h3>Développeur web</h3>
              <p class="tl-place">Thomyris — Chambéry</p>
              <span class="tl-date">Sept. 2023 – Déc. 2023</span>
            </div>
          </div>

          <!-- CDI -->
          <div class="tl-left"></div>
          <div class="tl-axis"><div class="tl-dot pro"></div></div>
          <div class="tl-right">
            <div class="tl-card pro">
              <span class="tl-type">CDI</span>
              <h3>Développeur web</h3>
              <p class="tl-place">Thomyris — Chambéry</p>
              <span class="tl-date">Jan. 2024 – Sept. 2024</span>
            </div>
          </div>

          <!-- CIFEP + Reprise alternance -->
          <div class="tl-left">
            <div class="tl-card school">
              <span class="tl-type">Formation</span>
              <h3>BTS SIO SLAM</h3>
              <p class="tl-place">CIFEP — Chambéry</p>
              <span class="tl-date">Sept. 2024 – Fév. 2026</span>
            </div>
          </div>
          <div class="tl-axis"><div class="tl-dot dual"></div></div>
          <div class="tl-right">
            <div class="tl-card pro">
              <span class="tl-type">Alternance</span>
              <h3>Développeur web</h3>
              <p class="tl-place">Thomyris — Chambéry</p>
              <span class="tl-date">Sept. 2024 – présent</span>
              <span class="tl-pill active">En cours</span>
            </div>
          </div>

          <!-- Saint Michel -->
          <div class="tl-left">
            <div class="tl-card school">
              <span class="tl-type">Formation</span>
              <h3>BTS SIO SLAM</h3>
              <p class="tl-place">Saint Michel — Annecy</p>
              <span class="tl-date">Fév. 2026 – présent</span>
              <span class="tl-pill active">En cours</span>
            </div>
          </div>
          <div class="tl-axis last"><div class="tl-dot"></div></div>
          <div class="tl-right"></div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* === PAGE === */
.synthese-page {
  padding: 60px 80px 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* === SECTION HEADER === */
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

/* === TWO-COLUMN LAYOUT === */
.page-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

/* ===========================
   TABLEAU DE SYNTHÈSE (LEFT)
=========================== */
.synthese-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.panel-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.panel-header h2 {
  font-family: 'KoHo', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #0C3808;
  margin: 0;
}

.synthese-pdf {
  width: 100%;
  height: 1300px;
  border-radius: 10px;
  border: 1px solid rgba(12, 56, 8, 0.12);
}

.download-btn {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  text-align: center;
  border: 2px solid #0C3808;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  font-family: 'KoHo', sans-serif;
  background-color: #0C3808;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.download-btn:hover {
  background-color: transparent;
  color: #0C3808;
}

/* ===========================
   TIMELINE (RIGHT)
=========================== */
.timeline-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Column headers */
.tl-col-headers {
  display: flex;
  align-items: center;
}

.tl-col-label {
  flex: 1;
  text-align: center;
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  color: #298421;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tl-axis-spacer {
  width: 72px;
  flex-shrink: 0;
}

/* Grid */
.timeline {
  display: grid;
  grid-template-columns: 1fr 72px 1fr;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(12, 56, 8, 0.18) 4%,
    rgba(12, 56, 8, 0.18) 96%,
    transparent
  );
  z-index: 0;
  pointer-events: none;
}

/* Axis */
.tl-axis {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 0;
  position: relative;
  z-index: 1;
}

/* Dots — normal = scolaire seul · pro = pro seul · dual = les deux côtés actifs */
.tl-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #0C3808;
  border: 3px solid #f0f0f0;
  box-shadow: 0 0 0 2px #0C3808;
  flex-shrink: 0;
}

.tl-dot.pro {
  background: #298421;
  box-shadow: 0 0 0 2px #298421;
}

.tl-dot.dual {
  width: 15px;
  height: 15px;
  background: #298421;
  border: 3px solid #f0f0f0;
  box-shadow: 0 0 0 2px #0C3808;
}

/* Left / Right containers */
.tl-left {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 12px 20px;
}

.tl-right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 20px 12px 0;
}

/* Cards */
.tl-card {
  background: #fff;
  border: 1px solid rgba(12, 56, 8, 0.1);
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  transition: box-shadow 0.25s ease, transform 0.2s ease;
}

.tl-card:hover {
  box-shadow: 0 5px 20px rgba(12, 56, 8, 0.09);
  transform: translateY(-2px);
}

.tl-left .tl-card.school {
  border-right: 3px solid #0C3808;
}

.tl-right .tl-card.pro {
  border-left: 3px solid #298421;
}

/* Card content */
.tl-type {
  font-family: 'Fira Code', monospace;
  font-size: 10px;
  color: #298421;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.tl-card h3 {
  font-family: 'KoHo', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #0C3808;
  margin: 0;
  line-height: 1.3;
}

.tl-option {
  font-size: 14px;
  font-weight: 400;
  color: #555;
}

.tl-place {
  font-size: 13px;
  color: #555;
  margin: 0;
  line-height: 1.5;
}

.tl-date {
  font-family: 'Fira Code', monospace;
  font-size: 10px;
  color: #888;
  margin-top: 2px;
}

/* Pills */
.tl-pill {
  display: inline-flex;
  align-items: center;
  padding: 2px 9px;
  border-radius: 20px;
  font-size: 10px;
  font-family: 'Fira Code', monospace;
  width: fit-content;
  margin-top: 2px;
}

.tl-pill.active {
  background: rgba(41, 132, 33, 0.1);
  border: 1px solid rgba(41, 132, 33, 0.3);
  color: #298421;
  animation: pulse-active 2.5s ease-in-out infinite;
}

@keyframes pulse-active {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

::-webkit-scrollbar { display: none; }
* { scrollbar-width: none; }
</style>
