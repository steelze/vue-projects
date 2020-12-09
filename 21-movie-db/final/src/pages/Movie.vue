<template>
  <div class="loading" v-if="loading"></div>
  <div v-else-if="error.show" class="page-error">
    <h1>{{ error.msg }}</h1>
    <router-link to="/" class="btn">
      back to movies
    </router-link>
  </div>
  <section v-else class="single-movie">
    <img :src="movie.Poster" :alt="movie.Title" />
    <div class="single-movie-info">
      <h2>{{ movie.Title }}</h2>
      <p>{{ movie.Plot }}</p>
      <h4>{{ movie.Year }}</h4>
      <router-link to="/" class="btn">
        back to movies
      </router-link>
    </div>
  </section>
</template>

<script>
import { useRoute } from 'vue-router';
import useFetch from '@/hooks/useFetch';

export default {
  name: 'Movie',
  setup() {
    const { params: { id } } = useRoute();
    const { loading, error, data: movie, fetchMovies } = useFetch();
    fetchMovies(`&i=${id}`);

    return { loading, error, movie };
  }
}
</script>
