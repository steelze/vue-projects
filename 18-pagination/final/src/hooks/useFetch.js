import { ref } from  'vue';
import paginate from '@/utils/paginate';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export default function useFetch() {
  const loading = ref(true);
  const data = ref([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const result = await response.json();
    data.value = paginate(result);
    loading.value = false;
  }

  getUsers();

  return { loading, data }
}
