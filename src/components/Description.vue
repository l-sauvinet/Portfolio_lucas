<template>
    <section class="description-section" id="description">

        <div class="section-header">
            <div class="nav-side nav-side--left">
                <Transition name="hint-left">
                    <span v-if="hoverPrev && currentSlide > 0" class="nav-hint">{{ slideLabels[currentSlide - 1] }}</span>
                </Transition>
                <button class="nav-btn" :class="{ invisible: currentSlide === 0 }" @click="prev" @mouseenter="hoverPrev = true" @mouseleave="hoverPrev = false" aria-label="Précédent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>
            </div>

            <div class="section-title">
                <span class="section-tag">&lt;section /&gt;</span>
                <h1>Description</h1>
                <div class="section-line"></div>
            </div>

            <div class="nav-side nav-side--right">
                <button class="nav-btn" :class="{ invisible: currentSlide === totalSlides - 1 }" @click="next" @mouseenter="hoverNext = true" @mouseleave="hoverNext = false" aria-label="Suivant">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>
                <Transition name="hint-right">
                    <span v-if="hoverNext && currentSlide < totalSlides - 1" class="nav-hint">{{ slideLabels[currentSlide + 1] }}</span>
                </Transition>
            </div>
        </div>

        <div class="slider-wrapper">
            <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">

                <!-- Slide 0 : Moi -->
                <div v-if="currentSlide === 0" key="0" class="slide">
                    <div class="desc-block">
                        <div class="desc-image desc-image--portrait">
                            <img src="/assets/lucas-img.png" alt="Lucas Sauvinet" class="desc-img desc-img--portrait" />
                        </div>
                        <div class="desc-content">
                            <span class="desc-tag">&lt;moi /&gt;</span>
                            <h2>Lucas Sauvinet</h2>
                            <p>
                                Étudiant en <strong>BTS SIO option SLAM</strong>, je me forme au développement web et applicatif
                                en alternance au sein de <strong>Thomyris</strong>, membre du groupe Xefi.
                                Passionné par la création d'interfaces modernes et les architectures logicielles propres,
                                j'aime concevoir des solutions qui allient <strong>performance et expérience utilisateur</strong>.
                            </p>
                            <p>
                                Curieux et autonome, je m'investis autant sur la partie front-end que back-end,
                                avec une appétence particulière pour <strong>Vue.js, Symfony</strong> et tout ce qui touche
                                à la qualité du code.
                            </p>
                            <div class="desc-badges">
                                <span class="badge">Vue.js</span>
                                <span class="badge">Symfony</span>
                                <span class="badge">MySQL</span>
                                <span class="badge">Git</span>
                                <span class="badge">Alternance</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 1 : Thomyris -->
                <div v-else-if="currentSlide === 1" key="1" class="slide">
                    <div class="desc-block">
                        <div class="desc-image">
                            <img src="/assets/thomyris-img.png" alt="Thomyris" class="desc-img" />
                        </div>
                        <div class="desc-content">
                            <span class="desc-tag">&lt;entreprise /&gt;</span>
                            <h2>Thomyris</h2>
                            <p>
                                Thomyris est un fournisseur intégré membre du groupe <strong>Xefi</strong>, acteur majeur des services
                                informatiques en France. Spécialisée dans les infrastructures réseau et la cybersécurité, l'entreprise
                                propose une gamme complète de matériels professionnels : <strong>switchs managés, firewalls, points
                                d'accès Wi-Fi, équipements de supervision</strong> et solutions de sauvegarde.
                            </p>
                            <p>
                                Depuis peu, Thomyris développe une nouvelle branche orientée <strong>développement applicatif</strong>,
                                avec pour ambition de concevoir des solutions logicielles centrées sur la sécurité informatique.
                                Cette évolution positionne l'entreprise comme un acteur complet, capable d'intervenir aussi bien
                                sur la couche matérielle que logicielle de la sécurité de ses clients.
                            </p>
                            <div class="desc-badges">
                                <span class="badge">Groupe Xefi</span>
                                <span class="badge">Cybersécurité</span>
                                <span class="badge">Réseau</span>
                                <span class="badge">Dev applicatif</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2 : Mes tâches -->
                <div v-else-if="currentSlide === 2" key="2" class="slide">
                    <div class="desc-block reverse">
                        <div class="desc-image">
                            <img src="/assets/tache-img.jpg" alt="Mes tâches" class="desc-img" />
                        </div>
                        <div class="desc-content">
                            <span class="desc-tag">&lt;alternance /&gt;</span>
                            <h2>Mes tâches en entreprise</h2>
                            <p>
                                Au sein de Thomyris, j'interviens principalement sur le développement de la nouvelle branche
                                applicative de l'entreprise. Mes missions couvrent un large spectre du cycle de développement,
                                de la <strong>conception</strong> à la <strong>mise en production</strong>.
                            </p>
                            <ul class="task-list">
                                <li><span class="task-dot"></span>Développement de fonctionnalités back-end et front-end</li>
                                <li><span class="task-dot"></span>Conception et modélisation de bases de données</li>
                                <li><span class="task-dot"></span>Rédaction de documentation technique</li>
                                <li><span class="task-dot"></span>Participation aux réunions de suivi de projet</li>
                                <li><span class="task-dot"></span>Tests et corrections de bugs</li>
                            </ul>
                            <div class="desc-badges">
                                <span class="badge">Vue.js</span>
                                <span class="badge">Symfony</span>
                                <span class="badge">MySQL</span>
                                <span class="badge">Git</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 3 : BTS SIO -->
                <div v-else-if="currentSlide === 3" key="3" class="slide">
                    <div class="desc-block">
                        <div class="desc-image">
                            <img src="/assets/BTS-img.jpg" alt="BTS SIO" class="desc-img" />
                        </div>
                        <div class="desc-content">
                            <span class="desc-tag">&lt;formation /&gt;</span>
                            <h2>Le BTS SIO</h2>
                            <p>
                                Le <strong>BTS Services Informatiques aux Organisations</strong> est un diplôme de niveau Bac+2
                                qui forme des techniciens capables de répondre aux besoins informatiques des entreprises.
                                La formation se déroule sur deux ans et alterne entre enseignements théoriques et mise en
                                pratique en entreprise via l'alternance ou le stage.
                            </p>
                            <p>
                                Le programme couvre des domaines variés : <strong>administration des systèmes et réseaux,
                                développement d'applications, cybersécurité, gestion de projet</strong> et support utilisateur.
                                Les étudiants acquièrent une vision globale du système d'information d'une organisation,
                                leur permettant d'intervenir efficacement à différents niveaux de la chaîne informatique.
                            </p>
                            <div class="desc-badges">
                                <span class="badge">Bac+2</span>
                                <span class="badge">Systèmes & Réseaux</span>
                                <span class="badge">Développement</span>
                                <span class="badge">Cybersécurité</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 4 : Option SLAM -->
                <div v-else key="4" class="slide">
                    <div class="desc-block reverse">
                        <div class="desc-image">
                            <img src="/assets/SLAM-img.jpg" alt="Option SLAM" class="desc-img" />
                        </div>
                        <div class="desc-content">
                            <span class="desc-tag">&lt;spécialité /&gt;</span>
                            <h2>L'option SLAM</h2>
                            <p>
                                L'option <strong>Solutions Logicielles et Applications Métiers</strong> est l'une des deux
                                spécialisations du BTS SIO. Elle forme des développeurs capables de concevoir, réaliser et
                                maintenir des applications adaptées aux besoins des entreprises.
                            </p>
                            <p>
                                La formation SLAM couvre l'ensemble du cycle de développement : <strong>analyse des besoins,
                                modélisation UML, développement web et mobile, gestion de bases de données</strong> et
                                intégration de composants tiers. Les étudiants apprennent à travailler avec des méthodologies
                                agiles et à maîtriser plusieurs langages et frameworks modernes, les rendant opérationnels
                                dès leur entrée dans le monde professionnel.
                            </p>
                            <div class="desc-badges">
                                <span class="badge">Développement web</span>
                                <span class="badge">UML</span>
                                <span class="badge">Agilité</span>
                                <span class="badge">Applications métiers</span>
                            </div>
                        </div>
                    </div>
                </div>

            </Transition>

            <!-- Dots -->
            <div class="dots">
                <button
                    v-for="i in totalSlides"
                    :key="i"
                    class="dot"
                    :class="{ active: currentSlide === i - 1 }"
                    @click="goTo(i - 1)"
                    :aria-label="`Slide ${i}`"
                />
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'

const totalSlides = 5
const currentSlide = ref(0)
// 'direction' détermine quelle classe CSS de transition appliquer (slide-left ou slide-right)
const direction = ref('next')
const hoverPrev = ref(false)
const hoverNext = ref(false)

// Labels affichés en hint au survol des boutons de navigation
const slideLabels = ['Moi', 'Entreprise', 'Alternance', 'Formation', 'Spécialité']

function next() {
    if (currentSlide.value < totalSlides - 1) {
        direction.value = 'next'
        currentSlide.value++
    }
}

function prev() {
    if (currentSlide.value > 0) {
        direction.value = 'prev'
        currentSlide.value--
    }
}

// Utilisé par les dots — détermine la direction selon si on avance ou recule
function goTo(index) {
    direction.value = index > currentSlide.value ? 'next' : 'prev'
    currentSlide.value = index
}
</script>

<style scoped>
.description-section {
    width: 100%;
    padding: 20px 0 80px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
    scroll-margin-top: 80px;
}

/* Titre de section */
.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.section-title {
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

.invisible {
    visibility: hidden;
    pointer-events: none;
}

/* Slider */
.slider-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slide {
    width: 100%;
    display: flex;
    justify-content: center;
}

/* Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s;
}

.slide-left-enter-from  { transform: translateX(60px);  opacity: 0; }
.slide-left-leave-to    { transform: translateX(-60px); opacity: 0; }
.slide-right-enter-from { transform: translateX(-60px); opacity: 0; }
.slide-right-leave-to   { transform: translateX(60px);  opacity: 0; }

/* Bloc image + texte */
.desc-block {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 80px;
    min-height: 420px;
    width: 80%;
}

.desc-block.reverse {
    flex-direction: row-reverse;
}

/* Image */
.desc-image {
    flex: 0 0 420px;
}

.desc-image--portrait {
    flex: 0 0 320px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.desc-img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 12px;
}

.desc-img--portrait {
    width: 320px;
    height: 320px;
    object-fit: cover;
    object-position: top;
}

/* Contenu texte */
.desc-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.desc-tag {
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    color: #298421;
    letter-spacing: 0.05em;
}

.desc-content h2 {
    font-size: 34px;
    color: #0C3808;
    margin: 0;
    line-height: 1.2;
}

.desc-content p {
    font-size: 16px;
    color: #444;
    line-height: 1.8;
    margin: 0;
}

.desc-content strong {
    color: #0C3808;
}

/* Liste des tâches */
.task-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.task-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: #444;
}

.task-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #298421;
    flex-shrink: 0;
}

/* Badges */
.desc-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
}

.badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-family: 'Fira Code', monospace;
    background: rgba(12, 56, 8, 0.07);
    border: 1px solid rgba(12, 56, 8, 0.2);
    color: #0C3808;
}

/* Sides avec bouton + hint */
.nav-side {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 160px;
}

.nav-side--left {
    justify-content: flex-end;
    flex-direction: row;
}

.nav-side--right {
    justify-content: flex-start;
    flex-direction: row;
}

.nav-hint {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    color: #298421;
    background: rgba(41, 132, 33, 0.08);
    border: 1px solid rgba(41, 132, 33, 0.2);
    padding: 4px 10px;
    border-radius: 20px;
    white-space: nowrap;
}

/* Transition hint droite */
.hint-right-enter-active, .hint-right-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}
.hint-right-enter-from, .hint-right-leave-to {
    opacity: 0;
    transform: translateX(-6px);
}

/* Transition hint gauche */
.hint-left-enter-active, .hint-left-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}
.hint-left-enter-from, .hint-left-leave-to {
    opacity: 0;
    transform: translateX(6px);
}

/* Boutons navigation */
.nav-btn {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 2px solid rgba(41, 132, 33, 0.3);
    background: rgba(255, 255, 255, 0.9);
    color: #298421;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.nav-btn:hover {
    background: #298421;
    color: #fff;
    border-color: #298421;
    transform: scale(1.08);
}

.nav-btn svg {
    width: 20px;
    height: 20px;
}

/* Dots */
.dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;
    height: 20px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(41, 132, 33, 0.25);
    cursor: pointer;
    padding: 0;
    transition: background 0.25s, transform 0.25s;
}

.dot.active {
    background: #298421;
    transform: scale(1.3);
}
</style>
