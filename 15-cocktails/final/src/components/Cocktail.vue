<template>
  <article class="cocktail">
    <div class="img-container">
      <img :src="cocktail.image" :alt="cocktail.name" />
    </div>
    <div class="cocktail-footer">
      <h3>{{ cocktail.name }}</h3>
      <h4>{{ cocktail.glass }}</h4>
      <p>{{ cocktail.info }}</p>
      <router-link :to="{ name: 'cocktail', params: { id: cocktail.id} }" class="btn btn-primary btn-details">details</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Cocktail',
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
}
</script>
