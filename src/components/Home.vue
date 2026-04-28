<template>
    <div class="home-container" id="accueil">
        <div class="home-info">
            <h2>Sauvinet Lucas <span class="tag">&lt;/&gt;</span></h2>
            <p>École Saint-Michel - Entreprise Thomyris</p>
            <p>Étudiant en BTS SIO – option SLAM</p>
            <div class="home-buttons">
                <a href="/assets/CV-Sauvinet lucas.pdf" target="_blank" class="home-btn">Télécharger mon CV</a>
                <a href="/assets/SAUVINET LUCAS - CERFA.pdf" target="_blank" class="home-btn btn-outline">Télécharger mon CERFA</a>
            </div>
        </div>
        <div class="home-design">
            <DevVisual />
        </div>
    </div>
</template>

<script>
import DevVisual from '@/components/DevVisual.vue'

export default {
    components: { DevVisual }
}
</script>

<style>
.home-container {
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.home-info {
    width: 400px;
    display: flex;
    flex-direction: column;
}

.home-info h2 {
    font-size: 45px;
    color: #0C3808;
    border-bottom: 1px solid #0C3808;
    font-family: 'KoHo', sans-serif;
}

.home-info h2 .tag {
    color: #0C3808;
    font-size: 35px;
    font-family: 'Montserrat', sans-serif;
}

.home-info p {
    font-size: 20px;
    color: #444;
    font-family: 'KoHo', sans-serif;
    font-weight: 500;
}

.home-buttons {
    display: flex;
    gap: 12px;
    margin-top: 15px;
    flex-wrap: wrap;
}

.home-btn {
    flex: 1;
    height: 40px;
    border: 2px solid #0C3808;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    background-color: #0C3808;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.home-btn:hover {
    background-color: transparent;
    color: #0C3808;
}

.home-btn.btn-outline {
    background-color: transparent;
    color: #0C3808;
}

.home-btn.btn-outline:hover {
    background-color: #0C3808;
    color: white;
}

.home-design {
    max-width: 600px;
    width: 100%;
    cursor: grab;
}
</style>