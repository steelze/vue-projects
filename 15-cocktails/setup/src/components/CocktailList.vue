<template>
  <h2>cocktail list component</h2>
  <Loading />
  <Cocktail />
</template>

<script>
import Cocktail from '@/components/Cocktail.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'CocktailList',
  components: {
    Cocktail,
    Loading,
  },
}
</script>
