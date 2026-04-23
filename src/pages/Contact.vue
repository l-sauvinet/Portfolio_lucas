<template>
  <div class="contact-page">

    <div class="section-header">
      <span class="section-tag">&lt;contact /&gt;</span>
      <h1>Contact</h1>
      <div class="section-line"></div>
    </div>

    <form class="contact-form" @submit.prevent="sendMail">

      <div class="form-row">
        <div class="form-group">
          <label for="name">Nom</label>
          <input id="name" v-model="form.name" type="text" placeholder="Votre nom" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="votre@email.com" required />
        </div>
      </div>

      <div class="form-group">
        <label for="subject">Sujet</label>
        <input id="subject" v-model="form.subject" type="text" placeholder="Sujet de votre message" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="6" placeholder="Votre message..." required></textarea>
      </div>

      <button type="submit" class="submit-btn">
        Envoyer le message
        <span class="btn-arrow">→</span>
      </button>

    </form>

    <div class="info-items">
      <div class="info-item">
        <span class="info-label">Email</span>
        <span class="info-value">lucas.sauvinet@gmail.com</span>
      </div>
      <div class="info-item">
        <span class="info-label">Localisation</span>
        <span class="info-value">Chambéry, France</span>
      </div>
      <div class="info-item">
        <span class="info-label">Disponibilité</span>
        <span class="info-value">En alternance — Thomyris</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Construit un lien mailto: avec les champs du formulaire pré-remplis
// et ouvre le client mail de l'utilisateur
function sendMail() {
  const to = 'lucas.sauvinet@gmail.com'
  const subject = encodeURIComponent(form.subject)
  const body = encodeURIComponent(
    `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-page {
  padding: 60px 140px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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

/* === FORM === */
.contact-form {
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fff;
  border: 1px solid rgba(12, 56, 8, 0.1);
  border-radius: 16px;
  padding: 36px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: #298421;
  letter-spacing: 0.05em;
}

input,
textarea {
  background: #f7f7f7;
  border: 1px solid rgba(12, 56, 8, 0.12);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-family: 'KoHo', sans-serif;
  color: #0C3808;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

input:focus,
textarea:focus {
  border-color: rgba(41, 132, 33, 0.5);
  box-shadow: 0 0 0 3px rgba(41, 132, 33, 0.08);
  background: #fff;
}

/* === BUTTON === */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  background: #0C3808;
  color: #fff;
  border: 2px solid #0C3808;
  border-radius: 8px;
  font-size: 15px;
  font-family: 'Fira Code', monospace;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  align-self: flex-end;
}

.submit-btn:hover {
  background: transparent;
  color: #0C3808;
  transform: translateY(-1px);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.submit-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* === INFO === */
.info-items {
  display: flex;
  gap: 48px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-label {
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  color: #298421;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.info-value {
  font-size: 15px;
  color: #0C3808;
  font-weight: 500;
}

::-webkit-scrollbar { display: none; }
* { scrollbar-width: none; }
</style>
