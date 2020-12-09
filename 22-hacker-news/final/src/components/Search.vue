<template>
  <form class="search-form" @submit.prevent="">
    <h2>search hacker news</h2>
    <input type="text" class="form-input" v-model="query" />
  </form>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Search',
  setup() {
    const { query } = useGlobalContext();

    return { query };
  }
}
</script>
