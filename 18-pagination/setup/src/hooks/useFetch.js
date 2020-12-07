import { ref } from  'vue';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export default function useFetch() {
  const loading = ref(true);
  const data = ref([]);

  const getUsers = async () => {
    const response = await fetch(url);
    data.value = await response.json();
    loading.value = false;
  }

  getUsers();

  return { loading, data }
}
