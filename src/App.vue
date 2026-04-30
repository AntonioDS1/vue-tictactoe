<script setup>
import Griglia from './components/Griglia/Griglia.vue';

import { onMounted, ref, provide } from 'vue'

const punteggioO = ref(0);
const punteggioX = ref(0);
const draw = ref(0);

provide("punteggioO", punteggioO);
provide("punteggioX", punteggioX);
provide("draw", draw);

onMounted(() => {

  const audio = document.getElementById('bg-audio')

  const startAudio = () => {
    audio.play()
    document.removeEventListener('click', startAudio)
    document.removeEventListener('keydown', startAudio)
  }

  document.addEventListener('click', startAudio)
  document.addEventListener('keydown', startAudio)
})

</script>

<template>

<RouterView :key="$route.fullPath" />

</template>
