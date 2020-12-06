<template>
  <Loading />
  <h2>single cocktail page</h2>
</template>

<script>
import Loading from '@/components/Loading.vue';

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export default {
  name: 'SingleCocktail',
  components: {
    Loading,
  },
}
</script>
