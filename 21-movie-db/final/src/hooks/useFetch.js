import { reactive, toRefs } from 'vue';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_MOVIE_API_KEY}`;
const state = reactive({
  loading: true,
  error: { show: false, msg: '' },
  data: null,
});

export default function useFetch() {
  const fetchMovies = async (query) => {
    state.loading = true;
    state.error = { show: false, msg: '' };
    try {
      const response = await fetch(`${API_ENDPOINT}${query}`);
      const data = await response.json();
      if (data.Response === 'True') {
        state.data = data.Search || data;
        state.error = { show: false, msg: '' };
      } else {
        state.error = { show: true, msg: data.Error };
      }
    } catch (e) {
      state.error = { show: true, msg: e.message };
    } finally {
      state.loading = false;
    }
  }

  return { ...toRefs(state), fetchMovies };
}
