<template>
  <main>
    <Navbar />
    <CartContainer :carts="carts" />
  </main>
</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import CartContainer from '@/components/CartContainer.vue';
import cartItems from '@/utils/data';

// const url = 'https://course-api.com/react-useReducer-cart-project';


export default {
  name: 'App',
  components: {
    Navbar,
    CartContainer,
  },
  setup() {
    const carts = ref(cartItems);

    return { carts };
  },
}
</script>
