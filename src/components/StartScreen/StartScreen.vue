<template>
  <div class="start-wrapper">
    <div class="title">TicTacToe</div>
    <p class="subtitle">[ seleziona la modalità ]</p>

    <select v-model="modalita" class="select-modalita">
      <option value="" disabled>-- Modalità --</option>
      <option value="facile" disabled>Facile   -</option>
      <option value="normale" disabled>Normale   -</option>
      <option value="difficile" disabled>Difficile   -</option>
      <option value="estremo" disabled>Estremo    -</option>
      <option value="multigiocatore">Multigiocatore    -</option>
    </select>

    <button class="play-btn" :disabled="!modalita" @click="startGame">▶ Play</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const modalita = ref('')

const startGame = () => {
  if (!modalita.value) return
  document.getElementById('bg-audio').play()
  router.push({ path: '/griglia', query: { modalita: modalita.value } })
}
</script>

<style scoped>
@import "StartScreen.css";
</style>
