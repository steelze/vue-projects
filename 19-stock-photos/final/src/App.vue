<template>
  <main>
    <section class="search">
      <form class="search-form" @submit.prevent="handleSubmit">
        <input type="text" placeholder="search" v-model="query" class="form-input" />
        <button type="submit" class="submit-btn">
          <i class="material-icons">search</i>
        </button>
      </form>
    </section>
    <section class="photos">
      <div class="photos-center">
        <Photo v-for="photo in photos" :key="photo.id" :photo="photo" />
      </div>
      <h2 class="loading" v-if="loading">Loading...</h2>
    </section>
  </main>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue';
import Photo from '@/components/Photo.vue';

const clientID = `?client_id=${process.env.VUE_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export default {
  name: 'App',
  components: {
    Photo,
  },
  setup() {
    console.log(clientID);
    const loading = ref(false);
    const photos = ref([]);
    const page = ref(1);
    const query = ref('male');
    watch(page, () => fetchImages());
    // Fetch images
    const fetchImages = async () => {
      loading.value = true;
      const urlPage = `&page=${page.value}`;
      const urlQuery = `&query=${query.value}`;
      const url = (query.value) ? `${searchUrl}${clientID}${urlPage}${urlQuery}` : `${mainUrl}${clientID}${urlPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (query.value && page.value === 1) {
          photos.value = data.results
        } else if (query.value) {
          photos.value = [...photos.value, ...data.results]
        } else {
          photos.value = [...photos.value, ...data]
        }
        loading.value = false;
      } catch (error) {
        console.log(error)
        loading.value = false;
      }
    }

    fetchImages();

    const event = window.addEventListener('scroll', () => {
      console.log(loading.value);
      if ((!loading.value && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2) {
        page.value++;
        console.log('Next');
      }
    });
    onUnmounted(() => window.removeEventListener('scroll', event));

    const handleSubmit = () => {
      if (page.value === 1) {
        fetchImages();
      } else {
        page.value = 1;
      }
    }

    return { loading, page, photos, query, handleSubmit };
  }
}
</script>
