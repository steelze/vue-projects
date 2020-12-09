<template>
  <form className="search-form" @submit.prevent="">
    <h2>search movies</h2>
    <input type="text" className="form-input" v-model="query" />
    <div className="error" v-if="error.show">{{ error.msg }}</div>
  </form>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Search',
  setup() {
    const { query, error } = useGlobalContext();

    return { query, error };
  }
}
</script>
