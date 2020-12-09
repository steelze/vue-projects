<template>
  <h2>movie component</h2>
  <Movies />
  <Search />
</template>

<script>
import Movies from '@/components/Movies.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Home',
  components: {
    Movies,
    Search,
  },
}
</script>
