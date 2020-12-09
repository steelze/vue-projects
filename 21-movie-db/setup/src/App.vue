<template>
  <Home />
  <Movie />
</template>

<script>
import Home from '@/components/Home.vue';
import Movie from '@/components/Movie.vue';

// const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_MOVIE_API_KEY}`

export default {
  name: 'App',
  components: {
    Home,
    Movie,
  },
}
</script>
