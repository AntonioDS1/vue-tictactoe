<script setup>

import { provide, ref, inject } from "vue"
import Casella from "../Casella/Casella.vue";
import Bottone from "../Bottone/Bottone.vue";

const currentOorX = ref("O");
provide("currentOorX", currentOorX);

const clickedCells = ref(1);
const fullGrid = ref(false);
const victory = ref(false);

const trisCounter = ref(0);

const punteggioO = inject("punteggioO");
const punteggioX = inject("punteggioX");
const draw = inject("draw");

const grid = ref([
  "", "", "",
  "", "", "",
  "", "", ""
]);

provide("fullGrid", fullGrid);
provide("victory", victory);

const checkGrid = (index, symbol) => {
  console.log("Hai cliccato la casella: ", index, " che ha il simbolo ", symbol);
  grid.value[index - 1] = symbol;

  if (victory.value) return;



  if (grid.value[0] === symbol && grid.value[1] === symbol && grid.value[2] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };
  if (grid.value[3] === symbol && grid.value[4] === symbol && grid.value[5] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };
  if (grid.value[6] === symbol && grid.value[7] === symbol && grid.value[8] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };

  if (grid.value[0] === symbol && grid.value[3] === symbol && grid.value[6] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };
  if (grid.value[1] === symbol && grid.value[4] === symbol && grid.value[7] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };
  if (grid.value[2] === symbol && grid.value[5] === symbol && grid.value[8] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };

  if (grid.value[0] === symbol && grid.value[4] === symbol && grid.value[8] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };
  if (grid.value[2] === symbol && grid.value[4] === symbol && grid.value[6] === symbol) { victory.value = true; trisCounter.value++; if (symbol === "O") punteggioO.value++; else punteggioX.value++; };

  if (trisCounter.value === 2) alert("Double tris!");

  if (clickedCells.value === 9) {

    fullGrid.value = true;
    if (!victory.value) draw.value++;
    console.log(grid.value);
    return;
  }


  clickedCells.value++

}

</script>

<template>

<div class="page-wrapper flex flex-col gap-8">
  <div class="punteggio">SCORE: O: {{ punteggioO }} / X: {{ punteggioX }} / DRAW: {{ draw }}</div>
  <div class="griglia">
    <Casella v-for="n in 9" :key="n" :index="n" @clicked="checkGrid"></Casella>
  </div>
  <Bottone action="restart">↺ Restart</Bottone>
  <Bottone action="back"><- Back</Bottone>
</div>



</template>

<style>
@import "./Griglia.css";
</style>
