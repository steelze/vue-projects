import { reactive, toRefs, watch } from 'vue';

const url = 'https://course-api.com/react-useReducer-cart-project';
const state = reactive({
  carts: [],
  loading: false,
  total: 0,
  amount: 0,
});

const calculatTotal = () => {
  const { total, amount } = state.carts.reduce((cartTotal, cart) => {
    const { price, amount } = cart;
    cartTotal.amount += amount;
    cartTotal.total += (price * amount);
    return cartTotal;
  }, { total: 0, amount: 0 });
  state.total = parseFloat(total.toFixed(2));
  state.amount = amount;
}

watch(() => state.carts, () => calculatTotal());

const displayItems = payload => {
  state.carts = payload;
  state.loading = false;
}

const loading = () => state.loading = true;

export default function useCart() {
  const clearCart = () => state.carts = [];

  const fetchData = async () => {
    loading();
    const response = await fetch(url);
    const cart = await response.json();
    displayItems(cart);
  }

  const decrease = payload => {
    state.carts = state.carts.map(cart => (cart.id === payload) ? { ...cart, amount: cart.amount - 1 } : cart).filter(cart => cart.amount !== 0);
  }

  const increase = payload => {
    state.carts = state.carts.map(cart => (cart.id === payload) ? {...cart, amount: cart.amount + 1} : cart);
  }

  const remove = payload => {
    state.carts = state.carts.filter(cart => cart.id !== payload);
  }

  return {
    ...toRefs(state),
    fetchData,
    clearCart,
    decrease,
    increase,
    remove,
  }
}
