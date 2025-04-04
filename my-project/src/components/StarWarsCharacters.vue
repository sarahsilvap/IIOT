<template>
  <div class="flex flex-column gap-2">
    <h1 class="text-primary">Personagens de Star Wars</h1>
    <div class="col-12" v-for="personagem in personagens" :key="personagem.name">
      <div class="p-card p-3 shadow-2 border-round">
        <h2 class="text-red-500">{{ personagem.name }}</h2>
        <p class="text-blue-500">{{ personagem.gender }} - {{ personagem.birth_year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      personagens: [],
    };
  },
  mounted() {
    // Fazer a requisição para a API do SWAPI
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        this.personagens = response.data.results;
      })
      .catch(error => {
        console.error("Erro ao buscar personagens:", error);
      });
  }
};
</script>

<style scoped>

</style>
