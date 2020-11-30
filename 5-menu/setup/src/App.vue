<template>
  <Categories />
  <Menu />
</template>

<script>
import Categories from '@/components/Categories.vue';
import Menu from '@/components/Menu.vue';
// import items from '@/utils/data';

export default {
  name: 'App',
  components: {
    Categories,
    Menu,
  },
}
</script>
