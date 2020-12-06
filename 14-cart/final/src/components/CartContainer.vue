<template>
  <section class='cart'>
    <!-- cart header -->
    <header>
      <h2>your bag</h2>
      <h4 v-if="!carts.length" class='empty-cart'>is currently empty</h4>
    </header>
    <!-- cart items -->
    <div>
      <CartItem v-for="cart in carts" :key="cart.id" :cart="cart" />
    </div>
    <!-- cart footer -->
    <footer>
      <hr />
      <div class='cart-total'>
        <h4>
          total <span>${{ total }}</span>
        </h4>
      </div>
      <button class='btn clear-btn' @click="clearCart">
        clear cart
      </button>
    </footer>
  </section>
</template>

<script>
import useCart from '@/hooks/useCart';
import CartItem from './CartItem.vue';

export default {
  name: 'CartContainer',
  components: {
    CartItem,
  },
  props: {
    carts: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { total, clearCart } = useCart();

    return { total, clearCart };
  }
}
</script>
