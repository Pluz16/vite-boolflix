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
  export default {
    props: ['movies']
  }
  </script>
  