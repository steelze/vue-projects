<template>
  <h2>hacker news starter</h2>
  <Buttons />
  <Search />
  <Stories />
</template>

<script>
import Stories from '@/components/Stories.vue';
import Search from '@/components/Search.vue';
import Buttons from '@/components/Buttons.vue';

// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';


export default {
  name: 'App',
  components: {
    Buttons,
    Stories,
    Search,
  },
}
</script>
