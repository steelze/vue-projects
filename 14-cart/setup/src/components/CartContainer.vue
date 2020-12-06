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
          total <span>$0.00</span>
        </h4>
      </div>
      <button class='btn clear-btn' @click="console.log('clear cart')">
        clear cart
      </button>
    </footer>
  </section>
</template>

<script>
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
}
</script>
