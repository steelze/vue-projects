import { reactive, toRefs } from 'vue';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const state = reactive({
  loading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
});

export default function useGlobalContext() {
  const fetchStories = async () => {
    state.loading = true;
    try {
      const response = await fetch(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
      const data = await response.json();
      state.hits = data.hits;
      state.nbPages = data.nbPages;
    } catch (e) {
      console.log(e)
    } finally {
      state.loading = false
    }
  }
  const removeStory = (id) => state.hits = state.hits.filter((story) => story.objectID !== id);

  const handleSearch = (e) => {
    state.query = e.target.value;
    state.page = 0;
    fetchStories();
  }

  const handlePage = (value) => {
    if (value === 'inc') {
      let nextPage = state.page + 1
      if (nextPage > state.nbPages - 1) {
        nextPage = 0;
      }
      state.page = nextPage;
    }
    if (value === 'dec') {
      let prevPage = state.page - 1
      if (prevPage < 0) {
        prevPage = state.nbPages - 1
      }
      state.page = prevPage;
    }
  }

  return {
    ...toRefs(state),
    removeStory,
    handlePage,
    handleSearch,
    fetchStories,
  };
}
