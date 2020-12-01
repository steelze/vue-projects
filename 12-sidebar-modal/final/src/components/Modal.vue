<template>
  <div class="modal-overlay" :class="modalClasses">
    <div class="modal-container">
      <h3>modal content</h3>
      <button class="close-modal-btn" type="button" @click="$emit('close-modal')">
        <i class="fa fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Modal',
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const modalClasses = computed(() => ({
      'show-modal': props.isModalOpen,
    }));

    return { modalClasses };
  },
}
</script>
