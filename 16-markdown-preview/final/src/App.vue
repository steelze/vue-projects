<template>
  <main>
    <section class='markdown'>
      <textarea class="input" v-model="input"></textarea>
      <article class="result" v-html="markdown"></article>
    </section>
  </main>
</template>

<script>
import { computed, ref } from 'vue';
import marked from 'marked';

export default {
  name: 'App',
  setup() {
    const input = ref('# markdown preview');
    const markdown = computed(() => marked(input.value));

    return { input, markdown };
  },
}
</script>
