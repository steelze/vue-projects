<template>
  <Home @open-sidebar="openSidebar" @open-modal="openModal" />
  <Modal :isModalOpen="isModalOpen" @close-modal="closeModal" />
  <Sidebar :isSidebarOpen="isSidebarOpen" @close-sidebar="closeSidebar" />
</template>

<script>
import { ref } from 'vue';
import Home from '@/components/Home.vue';
import Modal from '@/components/Modal.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Home,
    Modal,
    Sidebar,
  },
  setup() {
    const isSidebarOpen = ref(true);
    const isModalOpen = ref(false);

    function openSidebar() {
      isSidebarOpen.value = true;
    }
    function closeSidebar() {
      isSidebarOpen.value = false;
    }
    function openModal() {
      isModalOpen.value = true;
    }
    function closeModal() {
      isModalOpen.value = false;
    }

    return { isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal };
  }
}
</script>
