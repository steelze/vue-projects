<template>
  <Hero />
  <Navbar />
  <Sidebar />
  <Submenu />
</template>

<script>
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Submenu from '@/components/Submenu.vue';
// import sublinks from '@/utils/data';

export default {
  name: 'App',
  components: {
    Hero,
    Navbar,
    Sidebar,
    Submenu,
  }
}
</script>
