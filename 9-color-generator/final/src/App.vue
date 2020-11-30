<template>
  <section class="container">
    <h3>color generator</h3>
    <form @submit.prevent="generateShades">
      <input type="text" v-model="color" placeholder="#f15025" :class="{error}" />
      <button class="btn" type="submit">
        submit
      </button>
    </form>
  </section>
  <section class="colors">
    <Color v-for="(color, index) in list" :key="index" :color="color" :index="index" />
  </section>
</template>

<script>
import Values from 'values.js';
import Color from '@/components/Color.vue';

export default {
  name: 'App',
  components: {
    Color,
  },
  data() {
    return {
      color: '#f15025',
      error: false,
      list: [],
    }
  },
  mounted() {
    this.generateShades();
  },
  methods: {
    generateShades() {
      try {
        this.error = false;
        const colors = new Values(this.color).all(10);
        this.list = colors;
      } catch (e) {
        this.error = true;
        console.log(e)
      }
    }
  }
}
</script>
