<template>
    <section class="description-section" id="description">

        <div class="section-header">
            <span class="section-tag">&lt;section /&gt;</span>
            <h1>Description</h1>
            <div class="section-line"></div>
        </div>

        <!-- Thomyris -->
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

        <!-- Mes tâches -->
        <div class="desc-block reverse">
            <div class="desc-image">
                <img src="/assets/tache-img.jpg" alt="Thomyris" class="desc-img" />
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

        <!-- BTS SIO -->
        <div class="desc-block">
            <div class="desc-image">
                <img src="/assets/BTS-img.jpg" alt="Thomyris" class="desc-img" />
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

        <!-- Option SLAM -->
        <div class="desc-block reverse">
            <div class="desc-image">
                <img src="/assets/SLAM-img.jpg" alt="Thomyris" class="desc-img" />
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

    </section>
</template>

<script setup></script>

<style scoped>
.description-section {
    width: 100%;
    padding: 20px 0 80px 0;
    display: flex;
    flex-direction: column;
    gap: 100px;
    scroll-margin-top: 80px;
}

/* Titre de section */
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

/* Bloc image + texte */
.desc-block {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 80px;
}

.desc-block.reverse {
    flex-direction: row-reverse;
}

/* Image */
.desc-image {
    flex: 0 0 420px;
}

.desc-img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 12px;
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
</style>