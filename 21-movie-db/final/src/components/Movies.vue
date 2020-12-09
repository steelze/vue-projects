<template>
  <div v-if="loading" class="loading"></div>
  <section v-else class="movies">
    <router-link :to="{ name: 'movies', params: { id: movie.imdbID } }" v-for="movie in movies" :key="movie.imdbID" class="movie">
      <article>
        <img :src="movie.Poster === 'N/A' ? url : movie.Poster" :alt="movie.Title" />
        <div class="movie-info">
          <h4 class="title">{{ movie.Title }}</h4>
          <p>{{ movie.Year }}</p>
        </div>
      </article>
    </router-link>
  </section>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Movies',
  setup() {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
    const { movies, loading } = useGlobalContext()

    return { url, movies, loading };
  }
}
</script>
