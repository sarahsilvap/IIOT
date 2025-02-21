<script setup lang="ts">
    import { Places } from '@/models/devices'; 
    import { reactive, ref } from 'vue';
    
    const sala: Places = {
        nome: "Sala de estar",
        devices: []
    }

    const contador = ref(0);
    const somar = () => contador.value += 1;

</script>

<template>
    <h1>Contagem: {{ contador }}</h1>
    <button @click="somar">Contar</button>
</template>

<style setup lang="scss">

</style>