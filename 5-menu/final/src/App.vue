<template>
  <main>
    <section class="menu section">
      <div class="title">
        <h2>our menu</h2>
        <div class="underline"></div>
      </div>
      <Categories :categories="categories" @filterItems="setCategory" />
      <Menu :items="filteredMenuItems" />
    </section>
  </main>
</template>

<script>
import Categories from '@/components/Categories.vue';
import Menu from '@/components/Menu.vue';
import items from '@/utils/data';

export default {
  name: 'App',
  components: {
    Categories,
    Menu,
  },
  data() {
    return {
      category: 'all',
      categories: ['all', ...new Set(items.map((item) => item.category))],
      menuItems: items,
    }
  },
  methods: {
    setCategory(category) {
      this.category = category;
    },
  },
  computed: {
    filteredMenuItems() {
      return (this.category === 'all') ? this.menuItems : this.menuItems.filter(item => item.category === this.category);
    },
  },
}
</script>
