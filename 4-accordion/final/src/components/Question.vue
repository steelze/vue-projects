<template>
  <article class='question'>
    <header>
      <h4>{{ question.title }}</h4>
      <button type="button" class='btn' @click="showInfo = !showInfo">
        <span class="material-icons">{{ showInfo ? 'remove' : 'add' }}</span>
      </button>
    </header>
    <p v-if="showInfo">{{ question.info }}</p>
  </article>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showInfo: false,
    }
  },
}
</script>
