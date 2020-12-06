import { reactive, toRefs, watch } from 'vue';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const state = reactive({
  cocktails: [],
  loading: false,
  search: 'a',
});

export default function useCocktail() {

  watch(() => state.search, async () => await fetchDrinks());

  const setSearch = q => state.search = q;

  const fetchDrinks = async() => {
    try {
      state.loading = true;
      const response = await fetch(`${url}${state.search}`)
      const { drinks } = await response.json();
      if (drinks) {
        const cocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        });
        state.cocktails = cocktails;
      } else {
        state.cocktails = [];
      }
    } catch (e) {
      console.log(e);
    } finally {
      state.loading = false;
    }
  }

  return { ...toRefs(state), fetchDrinks, setSearch };
}
