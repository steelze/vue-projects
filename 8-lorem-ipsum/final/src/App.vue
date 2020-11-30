<template>
  <section class="section-center" id="name">
    <h3>tired of boring lorem ipsum?</h3>
    <form class="lorem-form" @submit.prevent="handleSubmit">
      <label for="count">paragraphs:</label>
      <input type="number" name="count" id="count" v-model.number="count" />
      <button class="btn">generate</button>
    </form>
    <article class="lorem-text">
      <p v-for="(item, index) in text" :key="index">{{ item }}</p>
    </article>
  </section>
</template>

<script>
import data from '@/utils/data';

export default {
  name: 'App',
   data() {
    return {
      count: 0,
      text: [],
    }
  },
  methods: {
    handleSubmit() {
      let amount = this.count;
      if (this.count <= 0) amount = 1;
      else if (this.count > 8) amount = 8;
      this.text = data.slice(0, amount);
    },
  },
}
</script>
