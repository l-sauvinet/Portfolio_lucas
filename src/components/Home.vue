<template>
    <div class="home-container">
        <div class="home-info">
            <h2>Sauvinet Lucas <span class="tag">&lt;/&gt;</span></h2>
            <p>École Saint-Michel - Entreprise Thomyris</p>
            <p>Étudiant en BTS SIO – option SLAM</p>
            <button>Télécharger mon CV</button>
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
}

.home-info h2 .tag {
    color: #0C3808;
    font-size: 35px;
}

.home-info p {
    font-size: 20px;
    color: #444;
}

.home-info button {
    width: 70%;
    height: 40px;
    border: 2px solid #298421;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    background-color: #298421;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-top: 15px;
}

.home-info button:hover {
    background-color: transparent;
    color: #298421;
}

.home-design {
    max-width: 600px;
    width: 100%;
    cursor: grab;
}
</style>