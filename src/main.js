import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const app = Vue.createApp({
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
  });
  
  app.mount('#app');
  