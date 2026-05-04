# Portfolio — Sauvinet Lucas

> Rapport de présentation — BTS SIO option SLAM  
> Étudiant : **Sauvinet Lucas** | Établissement : **École Saint-Michel, Annecy** | Entreprise : **Thomyris, Chambéry**

---

## Sommaire

1. [Présentation du projet](#1-présentation-du-projet)
2. [Stack technique](#2-stack-technique)
3. [Structure du projet](#3-structure-du-projet)
4. [Architecture applicative](#4-architecture-applicative)
5. [Pages et composants](#5-pages-et-composants)
6. [Fonctionnalités notables](#6-fonctionnalités-notables)
7. [Système de design](#7-système-de-design)
8. [Installation et lancement](#8-installation-et-lancement)
9. [Scripts disponibles](#9-scripts-disponibles)

---

## 1. Présentation du projet

Ce portfolio est une **application web monopage (SPA)** développée en **Vue 3** dans le cadre de la préparation de l'examen du BTS SIO option SLAM. Il a pour objectif de présenter :

- Mon profil et mon parcours scolaire / professionnel
- Les projets réalisés en entreprise et à titre personnel
- La veille technologique effectuée tout au long de la formation
- Le tableau de synthèse des compétences acquises

L'application est entièrement construite sans framework CSS externe (pas de Bootstrap, Tailwind, etc.) : tout le style est écrit en CSS natif scopé composant par composant.

---

## 2. Stack technique

| Rôle | Technologie | Version |
|---|---|---|
| Framework JS | Vue.js | 3.5.28 |
| Routeur | Vue Router | 5.0.4 |
| Outil de build | Vite | 7.3.1 |
| Environnement | Node.js | ≥ 20.19.0 ou ≥ 22.12.0 |
| Langage | JavaScript (ES Modules) | — |
| Styles | CSS natif (scoped SFC) | — |
| Polices | Google Fonts (KoHo, Fira Code, Montserrat) | — |

Aucune dépendance UI tierce (pas de librairie de composants). La sphère 3D interactive est réalisée entièrement avec l'API **Canvas 2D** du navigateur.

---

## 3. Structure du projet

```
portfolio-lucas/
│
├── public/
│   └── assets/                         # Ressources statiques (images, PDF, icônes)
│       ├── logo-p.svg                  # Logo du portfolio
│       ├── fav-icon.svg                # Favicon
│       ├── lucas-img.png               # Photo de profil
│       ├── thomyris-img.png            # Logo Thomyris
│       ├── BTS-img.jpg                 # Illustration BTS SIO
│       ├── SLAM-img.jpg                # Illustration option SLAM
│       ├── tache-img.jpg               # Illustration tâches en entreprise
│       ├── CV-Sauvinet lucas.pdf       # CV téléchargeable
│       ├── SAUVINET LUCAS - CERFA.pdf  # CERFA téléchargeable
│       ├── tableau de synthese - Sauvinet lucas.pdf   # Tableau de synthèse
│       ├── Axiora-img1.png / img2.svg  # Visuels projet Axiora
│       ├── Classyn-web-img1.svg / img2.svg            # Visuels projet Classyn web
│       ├── Kalydian-img1.svg / img2.png               # Visuels projet Kalydian
│       ├── ORVIS-img1.svg / img2.svg   # Visuels projet ORVIS
│       ├── spamRock-img1.png / img2.png               # Visuels projet SpamRock
│       └── portfolio-img1.svg / img2.png              # Visuels projet Portfolio
│
├── src/
│   ├── main.js                         # Point d'entrée — monte l'app sur #app
│   ├── App.vue                         # Composant racine (Header + RouterView)
│   │
│   ├── router/
│   │   └── index.js                    # Déclaration des routes (createWebHistory)
│   │
│   ├── components/                     # Composants réutilisables
│   │   ├── Header.vue                  # Barre de navigation sticky
│   │   ├── Home.vue                    # Section héro (titre + boutons CV/CERFA)
│   │   ├── Description.vue             # Carousel 5 slides (profil, entreprise…)
│   │   ├── Project.vue                 # Grille de projets + modale de détail
│   │   └── DevVisual.vue               # Sphère 3D interactive (Canvas 2D)
│   │
│   └── pages/                          # Vues associées aux routes
│       ├── MainPage.vue                # / — Page d'accueil (Home + Description + Project)
│       ├── Synthese.vue                # /synthese — Tableau de synthèse + timeline
│       ├── Veille.vue                  # /veille — Veille technologique
│       └── Contact.vue                 # /contact — Formulaire de contact
│
├── index.html                          # Point d'entrée HTML (Vite SPA shell)
├── vite.config.js                      # Configuration Vite (alias @, plugins)
├── jsconfig.json                       # Alias @ pour l'autocomplétion IDE
├── package.json                        # Dépendances et scripts npm
└── .gitignore                          # Fichiers exclus du dépôt
```

---

## 4. Architecture applicative

### Principe SPA avec Vue Router

L'application suit le modèle **Single Page Application** : une seule page HTML (`index.html`) est servie, et Vue Router gère la navigation côté client sans rechargement de page.

```
index.html
  └── #app
        └── App.vue
              ├── Header.vue  (sticky, présent sur toutes les pages)
              └── <RouterView>
                    ├── / → MainPage.vue → Home + Description + Project
                    ├── /synthese → Synthese.vue
                    ├── /veille → Veille.vue
                    └── /contact → Contact.vue
```

### Gestion du routeur (`src/router/index.js`)

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',         component: MainPage },
  { path: '/synthese', component: Synthese },
  { path: '/veille',   component: Veille   },
  { path: '/contact',  component: Contact  },
]

export default createRouter({
  history: createWebHistory(),        // URLs propres (sans #)
  routes,
  scrollBehavior: () => ({ top: 0 }), // Retour en haut à chaque navigation
})
```

### Scroll inter-sections (Header)

La page d'accueil est organisée en trois sections (`#accueil`, `#description`, `#projet`) accessibles par scroll. Le Header gère intelligemment la navigation : si l'utilisateur est sur une autre page, Vue Router ramène d'abord sur `/`, puis un `setTimeout(100ms)` laisse le DOM se monter avant d'effectuer le `scrollIntoView`.

---

## 5. Pages et composants

### Page d'accueil — `MainPage.vue`

Composée de trois composants empilés :

| Composant | Rôle |
|---|---|
| `Home.vue` | Hero section : nom, statut, boutons CV et CERFA |
| `Description.vue` | Carousel 5 slides avec transitions CSS |
| `Project.vue` | Grille de projets avec modale de détail |

---

### Composant `Description.vue` — Carousel

Carousel entièrement maison sans librairie externe. Fonctionnement :

- **5 slides** : Moi / Entreprise / Alternance / Formation / Spécialité SLAM
- Transitions CSS (`slide-left` / `slide-right`) gérées via `<Transition mode="out-in">`
- Boutons de navigation avec **hint au survol** (nom du slide suivant/précédent)
- Indicateurs de position (dots) cliquables
- La variable `direction` détermine quelle animation appliquer selon le sens de navigation

```js
const direction = ref('next')

function next() {
  direction.value = 'next'
  currentSlide.value++
}

function goTo(index) {
  direction.value = index > currentSlide.value ? 'next' : 'prev'
  currentSlide.value = index
}
```

---

### Composant `Project.vue` — Grille et modale

Liste de 7 projets présentés en grille. Chaque projet possède une **modale de détail** montée via `<Teleport to="body">` pour éviter tout problème de z-index. Au clic sur une carte, le scroll du body est bloqué (`document.body.style.overflow = 'hidden'`) et la modale s'affiche avec un fond flouté (`backdrop-filter: blur`).

---

### Projets réalisés

#### 1. Axiora
> Projet personnel

**Contexte :** Axiora est une application web de gestion de clients destinée aux entreprises de nettoyage. L'objectif était de concevoir un outil simple permettant de centraliser le suivi des contrats, des interventions et des informations clients, sans avoir à recourir à des tableurs ou des logiciels complexes.

**Fonctionnalités :**
- Gestion des fiches clients (création, modification, suppression)
- Suivi des contrats et des interventions associées
- Envoi d'e-mails automatiques via EmailJS (confirmations, rappels)
- Interface intuitive développée en Vue.js

**Architecture :**
- **Front-end** : Vue.js (Composition API), routage interne
- **Back-end / BDD** : Firebase (Firestore pour les données, Authentication pour les comptes)
- **Emails** : EmailJS (envoi sans back-end serveur)

**Technologies :** `Vue.js` `JavaScript` `Firebase` `EmailJS`

**Dépôt :** [github.com/l-sauvinet/Axiora](https://github.com/l-sauvinet/Axiora)

---

#### 2. SpamRock
> Projet d'entreprise — Thomyris *(code source non accessible)*

**Contexte :** SpamRock est une application web développée au sein de Thomyris, dédiée à la gestion et à la sécurisation des flux de messagerie. Le projet répond au besoin d'entreprises souhaitant analyser, filtrer et tracer les e-mails entrants et sortants pour se prémunir des tentatives de phishing et de spam.

**Fonctionnalités :**
- Visualisation et gestion des flux de messagerie
- Détection et filtrage des e-mails suspects
- Tableau de bord de supervision
- Historique et traçabilité des actions

**Architecture :**
- **Front-end** : Vue.js
- **Back-end** : Laravel (API REST)
- **Base de données** : MySQL
- **Infrastructure** : Docker (conteneurisation de l'environnement complet)
- **Versioning** : GitFlow (branches `main`, `develop`, `feature/*`, `release/*`)

**Technologies :** `Vue.js` `Laravel` `Docker` `MySQL` `GitFlow`

---

#### 3. ORVIS
> Projet personnel

**Contexte :** ORVIS est un assistant IA personnel conçu pour centraliser des outils du quotidien et automatiser certaines tâches récurrentes (rappels, recherche d'information, automatisation de scripts). Le projet explore l'intégration d'un LLM local pour garantir la confidentialité des données.

**Fonctionnalités :**
- Interface conversationnelle avec un modèle IA local (llama3)
- Automatisation de tâches récurrentes via scripts Python
- Interface mobile développée en Flutter
- Logique applicative et orchestration en C#

**Architecture :**
- **Interface mobile** : Flutter (Dart)
- **Orchestrateur** : C# (.NET) — gère les requêtes entre l'interface et le modèle
- **Modèle IA** : llama3 exécuté localement (pas de cloud, pas de données envoyées à l'extérieur)
- **Scripts de traitement** : Python (parsing, automatisations)

**Technologies :** `C#` `Python` `Flutter` `llama3`

**Dépôt :** [github.com/l-sauvinet/ORVIS](https://github.com/l-sauvinet/ORVIS)

---

#### 4. Classyn — Site web étudiant
> Projet personnel / scolaire

**Contexte :** Classyn est un outil de suivi de présence en temps réel. Le site web est destiné aux étudiants : il leur permet de consulter leurs absences et retards tels qu'ils ont été saisis par leurs formateurs, sans avoir à contacter l'administration.

**Fonctionnalités :**
- Consultation des absences et retards par étudiant
- Mise à jour en temps réel des données
- Authentification par compte étudiant
- Interface responsive développée en Vue.js

**Architecture :**
- **Front-end** : Vue.js — consomme une API REST
- **API** : REST PHP (endpoints dédiés à la lecture des données de présence)
- **Base de données** : MySQL (table étudiants, absences, retards, formateurs)

**Technologies :** `Vue.js` `JavaScript` `API REST` `MySQL`

**Dépôt :** [github.com/l-sauvinet/Website_VUE](https://github.com/l-sauvinet/Website_VUE)

---

#### 5. Classyn — Application mobile formateur
> Projet personnel / scolaire

**Contexte :** Pendant complémentaire au site étudiant, l'application mobile est destinée aux formateurs. Elle leur permet de gérer les salles de cours, de saisir les absences et retards directement depuis leur téléphone, et de synchroniser les données en temps réel avec la base partagée.

**Fonctionnalités :**
- Réservation de salles de cours
- Saisie des absences et retards par séance
- Synchronisation en temps réel avec la base MySQL
- Authentification par compte formateur

**Architecture :**
- **Application mobile** : .NET MAUI (C# / XAML) — .NET 10, pattern MVVM via CommunityToolkit.Mvvm 8.4.2
- **Plateformes cibles** : Android (API 21+), iOS 15+, Windows 10+
- **API** : Node.js + Express (Node 18 / Express 4)
- **Base de données** : MySQL 8.x hébergée sur AlwaysData (cloud)

**Technologies :** `C#` `XAML` `.NET MAUI` `MVVM` `Node.js` `Express` `MySQL`

**Dépôt :** [github.com/l-sauvinet/App_mobile](https://github.com/l-sauvinet/App_mobile)

---

#### 6. Kalydian
> Projet d'entreprise — Thomyris *(code source non accessible)*

**Contexte :** Kalydian est un gestionnaire de mots de passe développé chez Thomyris pour répondre aux exigences de sécurité des environnements professionnels. L'enjeu principal était de proposer une solution interne, auto-hébergée, sans dépendance à des services cloud tiers.

**Fonctionnalités :**
- Stockage sécurisé des identifiants et mots de passe
- Chiffrement des données côté serveur
- Gestion des accès par utilisateur / groupe
- Interface fluide et rapide en Vue.js

**Architecture :**
- **Front-end** : Vue.js (Composition API, routing)
- **Back-end** : Symfony (API REST, gestion de l'authentification et du chiffrement)
- **Base de données** : MySQL (conteneurisée)
- **Infrastructure** : Docker (stack complète conteneurisée)
- **Versioning** : GitFlow

**Technologies :** `Vue.js` `Symfony` `Docker` `MySQL` `GitFlow`

---

#### 7. Portfolio
> Projet personnel

**Contexte :** Ce portfolio a été conçu pour l'examen du BTS SIO option SLAM. Il présente le parcours, les compétences et l'ensemble des projets réalisés durant la formation. Le défi technique principal était la sphère 3D interactive de la page d'accueil, codée sans librairie 3D.

**Fonctionnalités :**
- Navigation SPA avec Vue Router (scroll fluide + routage)
- Sphère 3D interactive en Canvas 2D (rotation par drag, inertie)
- Carousel de présentation 5 slides avec transitions CSS
- Grille de projets avec modale de détail
- Timeline biaxiale du parcours scolaire et professionnel
- Page de veille technologique
- Formulaire de contact `mailto:`
- Téléchargement du CV, CERFA et tableau de synthèse

**Architecture :**
- SPA Vue 3 + Vue Router (4 routes)
- Pas de back-end — hébergement statique
- Sphère 3D : algorithme Canvas 2D + quaternions + spirale de Fibonacci
- CSS natif scopé, aucune librairie UI

**Technologies :** `Vue.js` `JavaScript` `Canvas 2D` `Vue Router` `Vite`

**Dépôt :** [github.com/l-sauvinet/Portfolio_lucas](https://github.com/l-sauvinet/Portfolio_lucas)

---

### Composant `DevVisual.vue` — Sphère 3D interactive

Visualisation 3D réalisée uniquement avec l'API **Canvas 2D** (pas de WebGL, pas de Three.js).

**Algorithme :**
- Distribution des points selon la **spirale de Fibonacci** (golden angle) pour un espacement homogène sur la sphère
- Rotation 3D via des **quaternions** (évite le gimbal lock des angles d'Euler)
- **Inertie** : lors du relâchement de la souris, la vélocité est conservée et décroît progressivement (`velocity *= 0.95`)
- **Support Retina** : le canvas est redimensionné au `devicePixelRatio`
- 120 points de structure + 20 labels de technologies (Vue.js, Symfony, SQL, Git, Docker…) projetés en perspective

```
Points 3D (x, y, z)
     ↓ rotation quaternion
Points 3D tournés
     ↓ projection perspective (z → scale, opacity)
Points 2D dessinés sur le canvas
```

---

### Page `Synthese.vue`

Mise en page deux colonnes :

- **Colonne gauche** : tableau de synthèse PDF intégré via `<embed>` + bouton de téléchargement
- **Colonne droite** : timeline biaxiale (Scolaire ↔ Professionnel) avec :
  - Points colorés selon le type d'événement (scolaire, pro, ou les deux)
  - Cartes avec effet hover (élévation + translateY)
  - Pills animées pour les événements en cours

---

### Page `Veille.vue`

Présente trois thèmes de veille technologique avec liens vers des articles externes :

1. **Vue.js** — Vue School : Vue.js en 2025 et Vapor Mode
2. **IA & Développement** — The Pragmatic Engineer : outils IA pour développeurs
3. **Tendances web** — LogRocket : 8 tendances du développement web en 2026

---

### Page `Contact.vue`

Formulaire de contact avec les champs : nom, email, sujet, message. La soumission génère un lien `mailto:` pré-rempli qui ouvre le client mail de l'utilisateur. Affiche également les informations de contact directes (email, localisation, disponibilité).

---

## 6. Fonctionnalités notables

### Navigation hybride (scroll + routeur)

Le Header distingue deux types de liens :
- **Liens internes à la homepage** (`#accueil`, `#description`, `#projet`) : scroll fluide avec gestion du retour depuis une autre page
- **Liens vers d'autres pages** (`RouterLink`) : navigation Vue Router classique

### Téléchargements directs

Depuis la page d'accueil :
- CV (`CV-Sauvinet lucas.pdf`) — s'ouvre dans un nouvel onglet
- CERFA (`SAUVINET LUCAS - CERFA.pdf`) — s'ouvre dans un nouvel onglet

Depuis la page Synthèse :
- Tableau de synthèse (`tableau de synthese - Sauvinet lucas.pdf`) — téléchargement forcé via l'attribut `download`

### Scroll invisible

La scrollbar est masquée sur tous les navigateurs via :
```css
::-webkit-scrollbar { display: none; }   /* Chrome, Safari */
html { scrollbar-width: none; }          /* Firefox */
```

---

## 7. Système de design

### Palette de couleurs

| Rôle | Valeur |
|---|---|
| Couleur primaire (foncé) | `#0C3808` |
| Couleur primaire (claire) | `#298421` |
| Fond de page | `#f0f0f0` |
| Texte secondaire | `#444` |
| Texte tertiaire | `#888` |
| Fond des cartes | `#ffffff` |

### Typographie

| Famille | Usage |
|---|---|
| **KoHo** (sans-serif) | Titres, labels, boutons |
| **Fira Code** (monospace) | Tags techniques (`<section />`), dates, badges |
| **Montserrat** (sans-serif) | Corps de texte général |

Chargement via CDN Google Fonts dans `index.html`.

### Composants visuels récurrents

- **Section tag** : `<span class="section-tag">&lt;nom /&gt;</span>` — identifiant de section style code
- **Badges** : pilules de technologie (`border-radius: 20px`, fond vert transparent)
- **Pills d'état** : indicateurs animés (pulsation CSS) pour les éléments en cours
- **Boutons** : fond vert foncé, hover inverse (transparent + bordure)

---

## 8. Installation et lancement

### Prérequis

- Node.js **≥ 20.19.0** ou **≥ 22.12.0**
- npm (inclus avec Node.js)

### Installation

```bash
# Cloner le dépôt
git clone <url-du-dépôt>
cd portfolio-lucas

# Installer les dépendances
npm install
```

### Lancement en développement

```bash
npm run dev
```

L'application est accessible sur `http://localhost:5173` (port Vite par défaut).

### Build de production

```bash
npm run build
```

Les fichiers compilés sont générés dans le dossier `dist/`, prêts à être déployés sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, etc.).

### Prévisualisation du build

```bash
npm run preview
```

---

## 9. Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite avec HMR |
| `npm run build` | Compile l'application pour la production |
| `npm run preview` | Prévisualise le build de production en local |

---

*Portfolio réalisé dans le cadre du BTS SIO option SLAM — Sauvinet Lucas, 2026*
