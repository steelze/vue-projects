<template>
  <Form v-if="waiting" />
  <Loading v-else-if="loading" />
  <main v-else>
    <Modal />
    <section class="quiz">
      <p class="correct-answers">correct answers : {{ correct }}/{{ index }}</p>
      <article class="container">
        <h2 v-html="question" />
        <div class="btn-container">
          <button v-for="(answer, index) in answers" :key="index" class="answer-btn" @click="checkAnswer(answer)" v-html="answer" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';
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
  setup() {
    const {
      waiting,
      loading,
      question,
      answers,
      index,
      correct,
      checkAnswer,
    } = useGlobalContext();

    return { waiting, loading, answers, question, index, correct, checkAnswer };
  }
}
</script>
