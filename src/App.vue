<template>
  <div>
    <form @submit.prevent="searchMovies">
      <input type="text" v-model="query" placeholder="Cerca un film">
      <button type="submit">Cerca</button>
    </form>
    <MovieList v-if="movies.length" :movies="movies"></MovieList>
  </div>
</template>

<script>
import axios from 'axios';
import MovieList from './components/MovieList.vue';

export default {
  components: {
    MovieList
  },
  data() {
    return {
      query: '',
      movies: []
    };
  },
  methods: {
    searchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'a946afb71f9ea4953b4cb984bc564170',
          query: this.query
        }
      })
      .then(response => {
        this.movies = response.data.results;
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

