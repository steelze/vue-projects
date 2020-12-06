<template>
  <section class="section search">
    <form class="search-form" @submit.prevent="">
      <div class="form-control">
        <label for="name">search your favorite cocktail</label>
        <input type="text" v-model="q" name="name" id="name" />
      </div>
    </form>
  </section>
</template>

<script>
import { ref, watch } from 'vue';
import useCocktail from '@/hooks/useCocktail';

export default {
  name: 'Search',
  setup() {
    const q = ref(null);
    const { setSearch } = useCocktail();

    watch(q, () => setSearch(q));

    return { q };
  },
}
</script>
