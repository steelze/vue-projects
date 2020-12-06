<template>
  <main>
    <Navbar />
    <div class="loading" v-if="loading">
      <h1>Loading...</h1>
    </div>
    <CartContainer v-else :carts="carts" />
  </main>
</template>

<script>
import useCart from '@/hooks/useCart';
import Navbar from '@/components/Navbar.vue';
import CartContainer from '@/components/CartContainer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    CartContainer,
  },
  setup() {
    const { carts, loading, fetchData } = useCart();
    fetchData();
    return { carts, loading };
  },
}
</script>
