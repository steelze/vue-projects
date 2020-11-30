<template>
  <main id="app">
    <div class='container'>
      <h3>questions and answers about login</h3>
      <section class='info'>
        <Question v-for="question in questions" :key="question.id" :question="question" />
      </section>
    </div>
  </main>
</template>

<script>
import Question from '@/components/Question.vue';
import data from '@/utils/data';

export default {
  name: 'App',
  components: {
    Question,
  },
  data() {
    return {
      questions: data,
    }
  },
}
</script>
