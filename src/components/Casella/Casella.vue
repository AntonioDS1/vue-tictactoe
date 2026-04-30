<template>
  <div class="casella" ref="casella" @click="putSymbol"></div>
</template>

<script setup>
import { inject, ref } from 'vue';
import imgO from '../../assets/images/on-fire-flames.gif';
import imgX from '../../assets/images/neon-sign-neon.gif';
import audioO from '../../assets/Audio/ahmed_abdulaal-laser-312360.mp3';
import audioX from '../../assets/Audio/timmysnake-laser-sword-266508.mp3';

const props = defineProps({
  index: Number,
  }
)

const victory = inject("victory");

const currentOorX = inject("currentOorX");
const casella = ref(null);

const soundO = new Audio(audioO);
const soundX = new Audio(audioX);

const clicked = ref(false);
const emit = defineEmits(['clicked']);

function putSymbol() {
  if (victory.value) return;
  if (clicked.value) return;

  casella.value.style.backgroundImage = `url(${currentOorX.value === "O" ? imgO : imgX})`;

  if (currentOorX.value === "O") soundO.play(); else soundX.play();

  emit('clicked', props.index, currentOorX.value);

  currentOorX.value = currentOorX.value === "O" ? "X" : "O";
  clicked.value = true;


}
</script>
