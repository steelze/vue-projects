<template>
  <Loading v-if="loading" />
  <h2 class="section-title" v-else-if="!cocktail">no cocktail to display</h2>
  <section class="section cocktail-section" v-else>
    <router-link to="/" class="btn btn-primary">back home</router-link>
    <h2 class="section-title">{{ cocktail.name }}</h2>
    <div class="drink">
      <img :src="cocktail.image" :alt="cocktail.name" />
      <div class="drink-info">
        <p>
          <span class="drink-data">name :</span> {{ cocktail.name }}
        </p>
        <p>
          <span class="drink-data">category :</span> {{ cocktail.category }}
        </p>
        <p>
          <span class="drink-data">info :</span> {{ cocktail.info }}
        </p>
        <p>
          <span class="drink-data">glass :</span> {{ cocktail.glass }}
        </p>
        <p>
          <span class="drink-data">instructons :</span> {{ cocktail.instructions }}
        </p>
        <p>
          <span class="drink-data">ingredients :</span>
          <span v-for="(ingredient, index) in cocktail.ingredients" :key="index">{{ ingredient }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Loading from '@/components/Loading.vue';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export default {
  name: 'SingleCocktail',
  components: {
    Loading,
  },
  setup() {
    const loading = ref(true);
    const cocktail = ref(null);
    const route = useRoute();

    const getCocktail = async(id) => {
      try {
        const response = await fetch(`${url}${id}`)
        const { drinks } = await response.json()
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          cocktail.value = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
        } else {
          cocktail.value = null;
        }
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false;
      }
    }

    onMounted(async () => await getCocktail(route.params.id));

    return { loading, cocktail };
  },
}
</script>
