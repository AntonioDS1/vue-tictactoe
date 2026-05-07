<template>
    <button class="bottone" @click="handleClick"><slot></slot></button>
</template>

<style scoped>
@import "Bottone.css";
</style>

<script setup>
import { useRouter } from 'vue-router'
import { inject, ref } from 'vue';

const props = defineProps({
    action: String,
})



const router = useRouter()

const fullGrid = inject("fullGrid");
const victory = inject("victory");

const punteggioO = inject("punteggioO");
const punteggioX = inject("punteggioX");

function handleClick() {
    if (props.action === "restart") {
        router.replace('/griglia?r=' + Date.now());
    } else if (props.action === "back") {
        punteggioO.value = 0;
        punteggioX.value = 0;
        router.replace('/');
    }
}

</script>
