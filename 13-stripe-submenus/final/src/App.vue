<template>
  <Navbar @open-submenu="openSubmenu" @open-sidebar="openSidebar" @close-submenu="closeSubmenu" />
  <Sidebar :isSidebarOpen="isSidebarOpen" @close-sidebar="closeSidebar" />
  <Hero @close-submenu="closeSubmenu" />
  <Submenu :isSubmenuOpen="isSubmenuOpen" :submenu="state.submenu" />
</template>

<script>
import { ref, reactive } from 'vue';
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Submenu from '@/components/Submenu.vue';
import sublinks from '@/utils/data';

export default {
  name: 'App',
  components: {
    Hero,
    Navbar,
    Sidebar,
    Submenu,
  },
  setup() {
    const isSidebarOpen = ref(false);
    const isSubmenuOpen = ref(false);
    const state = reactive({
      submenu: {
        links:[]
      }
    });

    function openSidebar() {
      isSidebarOpen.value = true;
    }
    function closeSidebar() {
      isSidebarOpen.value = false;
    }
    function openSubmenu(payload) {
      isSubmenuOpen.value = true;
      const page = sublinks.find((link) => link.page === payload.page);
      state.submenu = { ...payload, ...page };
    }
    function closeSubmenu() {
      isSubmenuOpen.value = false;
    }

    return {
      isSidebarOpen,
      isSubmenuOpen,
      state,
      openSidebar,
      closeSidebar,
      openSubmenu,
      closeSubmenu,
    }
  },
}
</script>
