import { ref, watch } from 'vue';
import useFetch from './useFetch';

export default function useGlobalContext() {
  const query = ref('batman');
  const { loading, error, data: movies, fetchMovies } = useFetch();

  watch(query, () => fetchMovies(`&s=${query.value}`), { immediate: true });


  return { query, loading, error, movies };
}
