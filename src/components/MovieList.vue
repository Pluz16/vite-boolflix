<template>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>Titolo originale: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_average }}</p>
      </li>
    </ul>
  </template>
  
  <script>
import FlagIcon from './FlagIcon.vue';

export default {
  props: ['movies'],
  components: {
    FlagIcon
  }
}
  </script>
  