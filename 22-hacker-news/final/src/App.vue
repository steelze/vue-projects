<template>
  <Search />
  <Buttons />
  <Stories />
</template>

<script>
import { watch } from 'vue';
import Stories from '@/components/Stories.vue';
import Search from '@/components/Search.vue';
import Buttons from '@/components/Buttons.vue';
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'App',
  components: {
    Buttons,
    Stories,
    Search,
  },
  setup() {
    const { query, page, fetchStories } = useGlobalContext();

    watch([page, query], () => fetchStories(), { immediate: true });
  }
}
</script>
