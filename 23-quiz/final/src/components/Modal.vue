<template>
  <div class="modal-container" :class="isModalOpen ? 'isOpen' : ''">
    <div class="modal-content">
      <h2>congrats!</h2>
      <p> You answered {{ ((correct / questions.length) * 100).toFixed(0) }}% of questions correctly </p>
      <button class="close-btn" @click="closeModal">play again</button>
    </div>
  </div>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Modal',
  setup() {
    const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

    return { isModalOpen, closeModal, correct, questions };
  }
}
</script>
