<template>
  <div class="flex flex-wrap md:justify-between justify-center">
    <h1>Personagens de Star Wars</h1>
    <ul>
      <li v-for="personagem in personagens" :key="personagem.name">
        {{ personagem.name }} - {{ personagem.gender }} - {{ personagem.birth_year }}
      </li>
    </ul>
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
