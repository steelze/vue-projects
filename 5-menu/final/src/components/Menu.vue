<template>
  <div class="section-center">
    <article class="menu-item" v-for="item in items" :key="item.id">
      <img :src="require(`@/assets/${item.img}`)" :alt="item.title" class="photo" />
      <div class="item-info">
        <header>
          <h4>{{ item.title }}</h4>
          <h4 class="price">${{ item.price }}</h4>
        </header>
        <p class="item-text">{{ item.desc }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>
