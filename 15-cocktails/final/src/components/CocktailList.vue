<template>
  <section class="section">
    <Loading v-if="loading" />
    <h2 class="section-title" v-else-if="!cocktails.length">
      no cocktails matched your search criteria
    </h2>
    <div v-else>
      <h2 class="section-title">cocktails</h2>
      <div class="cocktails-center">
        <Cocktail v-for="cocktail in cocktails" :key="cocktail.id" :cocktail="cocktail" />
      </div>
    </div>
  </section>
</template>

<script>
import useCocktail from '@/hooks/useCocktail';
import Cocktail from '@/components/Cocktail.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'CocktailList',
  components: {
    Cocktail,
    Loading,
  },
  setup() {
    const { loading, cocktails, fetchDrinks } = useCocktail();
    fetchDrinks();
    return { loading, cocktails };
  },
}
</script>
