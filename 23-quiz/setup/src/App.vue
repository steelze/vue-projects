<template>
  <Form />
  <Loading />
  <Modal />
</template>

<script>
import Form from '@/components/Form.vue';
import Loading from '@/components/Loading.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'App',
  components: {
    Form,
    Loading,
    Modal,
  },
}
</script>
