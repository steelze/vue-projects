<template>
  <Home />
  <Modal />
  <Sidebar />
</template>

<script>
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
}
</script>
