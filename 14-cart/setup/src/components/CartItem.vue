<template>
  <article class="cart-item">
    <img :src="cart.img" :alt="cart.title" />
    <div>
      <h4>{{ cart.title }}</h4>
      <h4 class="item-price">${{ cart.price }}</h4>
      <!-- remove button -->
      <button  class="remove-btn" @click="console.log('remove item')">
        remove
      </button>
    </div>
    <div>
      <!-- increase amount -->
      <button class="amount-btn" @click="console.log('increase')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
      </button>
      <!-- amount -->
      <p class="amount">{{ cart.amount }}</p>
      <!-- decrease amount -->
      <button class="amount-btn" @click="console.log('decrease')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
}
</script>
