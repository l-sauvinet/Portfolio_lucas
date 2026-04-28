<template>
    <section class="project-section" id="projet">

        <div class="section-header">
            <span class="section-tag">&lt;section /&gt;</span>
            <h1>Projets</h1>
            <div class="section-line"></div>
        </div>

        <div class="project-list">
            <div
                v-for="project in projects"
                :key="project.id"
                class="project-card"
                @click="openModal(project)"
            >
                <div class="card-image">
                    <img :src="project.image" :alt="project.title" />
                </div>
                <div class="card-content">
                    <span class="card-tag">{{ project.tag }}</span>
                    <h2>{{ project.title }}</h2>
                    <p class="card-desc">{{ project.shortDesc }}</p>
                    <div class="card-badges">
                        <span class="badge" v-for="tech in project.techs.slice(0, 4)" :key="tech">{{ tech }}</span>
                    </div>
                </div>
                <div class="card-arrow">→</div>
            </div>
        </div>

        <!-- Modale -->
        <Teleport to="body">
            <div v-if="selected" class="modal-overlay" @click.self="closeModal">
                <div class="modal">
                    <button class="modal-close" @click="closeModal">✕</button>
                    <div class="modal-image">
                        <img :src="selected.imageDesc || selected.image" :alt="selected.title" />
                    </div>
                    <div class="modal-body">
                        <span class="card-tag">{{ selected.tag }}</span>
                        <h2>{{ selected.title }}</h2>
                        <p v-for="(para, i) in selected.description" :key="i">{{ para }}</p>
                        <div class="modal-badges">
                            <span class="badge" v-for="tech in selected.techs" :key="tech">{{ tech }}</span>
                        </div>
                        <div class="modal-links" v-if="selected.github || selected.demo">
                            <a v-if="selected.github" :href="selected.github" target="_blank" class="modal-btn">
                                GitHub
                            </a>
                            <a v-if="selected.demo" :href="selected.demo" target="_blank" class="modal-btn modal-btn-outline">
                                Voir la démo
                            </a>
                        </div>
                        <p v-if="selected.enterprise" class="enterprise-notice">
                            Projet d'entreprise — code source non accessible
                        </p>
                    </div>
                </div>
            </div>
        </Teleport>

    </section>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

// Bloque le scroll du body pendant qu'une modale est ouverte
function openModal(project) {
    selected.value = project
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    selected.value = null
    document.body.style.overflow = ''
}

const projects = [
    {
        id: 1,
        tag: '<projet />',
        title: 'Axiora',
        image: '/assets/Axiora-img1.png',
        imageDesc: '/assets/Axiora-img2.svg',
        shortDesc: 'Application de gestion de clients pour entreprise de nettoyage.',
        description: [
            'Axiora est une application web de gestion de clients destinée aux entreprises de nettoyage.',
            'Elle permet de suivre les contrats, les interventions et les informations clients depuis une interface simple et intuitive, développée avec Vue.js et Firebase.',
        ],
        techs: ['Vue.js', 'JavaScript', 'Firebase', 'EmailJS'],
        github: 'https://github.com/l-sauvinet/Axiora',
        demo: null,
    },
    {
        id: 2,
        tag: '<projet />',
        title: 'Spamrock',
        image: '/assets/spamRock-img1.png',
        imageDesc: '/assets/spamRock-img2.png',
        shortDesc: 'Application web développée en entreprise pour la gestion de mail et la securisation de mail.',
        description: [
            'Spamrock est une application web développée au sein de Thomyris, dédiée à la gestion et à la sécurisation des flux de messagerie.',
            'Le projet repose sur une architecture conteneurisée avec Docker, un back-end Laravel et un front-end Vue.js, avec un workflow Git structuré via GitFlow.',
        ],
        techs: ['Vue.js', 'Laravel', 'Docker', 'MySQL', 'GitFlow'],
        github: null,
        demo: null,
        enterprise: true,
    },
    {
        id: 3,
        tag: '<projet />',
        title: 'ORVIS',
        image: '/assets/ORVIS-img1.svg',
        imageDesc: '/assets/ORVIS-img2.svg',
        shortDesc: 'Mon assistant IA personnel.',
        description: [
            'ORVIS est mon assistant IA personnel, conçu pour centraliser mes outils du quotidien et automatiser certaines tâches récurrentes.',
            'Il repose sur un modèle llama3 exécuté localement, avec une interface mobile développée en Flutter, une logique back-end en C# et des scripts Python pour le traitement des données.',
        ],
        techs: ['C#', 'Python', 'Flutter', 'llama3'],
        github: 'https://github.com/l-sauvinet/ORVIS',
        demo: null,
    },
    {
        id: 4,
        tag: '<projet />',
        title: 'Classyn (student website)',
        image: '/assets/Classyn-web-img1.svg',
        imageDesc: '/assets/Classyn-web-img2.svg',
        shortDesc: 'Site web de visualisation des abscences et retards pour les étudiants.',
        description: [
            'Classyn est un site web permettant aux étudiants de consulter en temps réel leurs absences et retards enregistrés par leurs formateurs.',
            'L\'interface est développée en Vue.js, communique avec une API REST et s\'appuie sur une base de données MySQL pour stocker les données de présence.',
        ],
        techs: ['Vue.js', 'JavaScript', 'API', 'MySQL'],
        github: 'https://github.com/l-sauvinet/Website_VUE',
        demo: null,
    },
    {
        id: 5,
        tag: '<projet />',
        title: 'Classyn (teacher mobile app)',
        image: '/assets/Classyn-web-img1.svg',
        shortDesc: 'Application mobile de reservation de salle de cours, ajout de retard et abscences pour les formateurs.',
        description: [
            'Classyn Teacher est l\'application mobile complémentaire du site étudiant, destinée aux formateurs.',
            'Développée en C#, elle permet de réserver des salles, saisir les absences et retards, et se synchronise en temps réel avec la base de données MySQL via PHP.',
        ],
        techs: ['C#', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        github: 'https://github.com/l-sauvinet/App_mobile',
        demo: null,
    },
    {
        id: 6,
        tag: '<projet />',
        title: 'Kalydian',
        image: '/assets/Kalydian-img1.svg',
        imageDesc: '/assets/Kalydian-img2.png',
        shortDesc: 'Application web développée en entreprise pour la gestion de mot de passe sécurisée.',
        description: [
            'Kalydian est un gestionnaire de mots de passe développé en entreprise chez Thomyris, conçu pour répondre aux exigences de sécurité des environnements professionnels.',
            'L\'application chiffre les données côté serveur et propose une interface Vue.js fluide, avec une API Symfony et une base de données MySQL conteneurisée sous Docker.',
        ],
        techs: ['Vue.js', 'Symfony', 'Docker', 'MySQL', 'GitFlow'],
        github: null,
        demo: null,
        enterprise: true,
    },
    {
        id: 7,
        tag: '<projet />',
        title: 'Portfolio',
        image: '/assets/portfolio-img1.svg',
        imageDesc: '/assets/portfolio-img2.png',
        shortDesc: 'Portfolio personnel développé en Vue.js pour présenter mon parcours et mes projets réalisés durant ma formation en BTS SIO option SLAM.',
        description: [
            'Ce portfolio a été conçu pour présenter mon parcours, mes compétences et l\'ensemble des projets réalisés durant ma formation en BTS SIO option SLAM.',
            'Il est développé en Vue.js avec un design épuré et une identité visuelle cohérente. La sphère interactive de la page d\'accueil est entièrement codée en Canvas 2D avec des quaternions pour les rotations.',
        ],
        techs: ['Vue.js', 'JavaScript', 'Canvas 2D'],
        github: 'https://github.com/l-sauvinet/Portfolio_lucas',
        demo: null,
    },
]
</script>

<style scoped>
.project-section {
    width: 100%;
    padding: 20px 0 80px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
    scroll-margin-top: 80px;
}

/* Header identique aux autres sections */
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

/* Liste de projets */
.project-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 140px;
}

/* Card */
.project-card {
    display: flex;
    align-items: center;
    gap: 40px;
    background: #fff;
    border: 1px solid rgba(12, 56, 8, 0.12);
    border-radius: 14px;
    padding: 32px 28px;
    cursor: pointer;
    transition: box-shadow 0.25s ease, transform 0.2s ease, border-color 0.25s ease;
    position: relative;
    min-height: 180px;
}

.project-card:hover {
    box-shadow: 0 8px 32px rgba(12, 56, 8, 0.12);
    transform: translateY(-2px);
    border-color: rgba(41, 132, 33, 0.35);
}

/* Image de la card */
.card-image {
    flex: 0 0 450px;
    border-radius: 10px;
    overflow: hidden;
    align-self: stretch;
}

.card-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.project-card:hover .card-image img {
    transform: scale(1.03);
}

/* Contenu */
.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-tag {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    color: #298421;
    letter-spacing: 0.05em;
}

.card-content h2 {
    font-size: 24px;
    color: #0C3808;
    margin: 0;
    line-height: 1.2;
}

.card-desc {
    font-size: 15px;
    color: #555;
    line-height: 1.7;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
}

.badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-family: 'Fira Code', monospace;
    background: rgba(12, 56, 8, 0.07);
    border: 1px solid rgba(12, 56, 8, 0.2);
    color: #0C3808;
}

/* Flèche */
.card-arrow {
    font-size: 22px;
    color: #298421;
    flex-shrink: 0;
    transition: transform 0.2s ease;
    padding-right: 8px;
}

.project-card:hover .card-arrow {
    transform: translateX(4px);
}

/* ===== MODALE ===== */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(8, 30, 6, 0.55);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 24px;
}

.modal {
    background: #fff;
    border-radius: 16px;
    max-width: 1000px;
    width: 100%;
    max-height: 95vh;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 24px 64px rgba(12, 56, 8, 0.2);
}

.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(12, 56, 8, 0.07);
    border: 1px solid rgba(12, 56, 8, 0.15);
    border-radius: 8px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #0C3808;
    cursor: pointer;
    z-index: 1;
    transition: background 0.2s ease;
}

.modal-close:hover {
    background: rgba(12, 56, 8, 0.14);
}

.modal-image {
    width: 100%;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    flex-shrink: 0;
}

.modal-image img {
    width: 100%;
    aspect-ratio: 16/7;
    object-fit: cover;
    display: block;
}

.modal-body {
    padding: 32px 36px 36px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.modal-body h2 {
    font-size: 30px;
    color: #0C3808;
    margin: 0;
    line-height: 1.2;
    font-family: 'Montserrat', sans-serif;
}

.modal-body p {
    font-size: 15px;
    color: #444;
    line-height: 1.8;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

.modal-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
}

.modal-links {
    display: flex;
    gap: 12px;
    margin-top: 8px;
}

.modal-btn {
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Fira Code', monospace;
    text-decoration: none;
    background: #0C3808;
    color: #fff;
    border: 2px solid #0C3808;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}

.modal-btn:hover {
    background: transparent;
    color: #0C3808;
}

.modal-btn-outline {
    background: transparent;
    color: #0C3808;
}

.modal-btn-outline:hover {
    background: #0C3808;
    color: #fff;
}

.enterprise-notice {
    font-size: 13px;
    font-family: 'Fira Code', monospace;
    color: #777;
    background: rgba(12, 56, 8, 0.05);
    border: 1px solid rgba(12, 56, 8, 0.15);
    border-radius: 8px;
    padding: 8px 14px;
    margin: 0;
    display: inline-block;
    align-self: flex-start;
}
</style>
