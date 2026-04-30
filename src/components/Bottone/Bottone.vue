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

function handleClick() {
    if (props.action === "restart") {
        router.replace('/griglia?r=' + Date.now());
    } else if (props.action === "back") {
        router.replace('/');
    }
}

</script>
