<template>
  <article class="color" :class="classObject" :style="backgroundObject" @click="copyToClipboard">
    <p class="percent-value">{{ color.weight }}%</p>
    <p class="color-value">#{{ color.hex }}</p>
    <p class="alert" v-if="alert">copied to clipboard</p>
  </article>
</template>

<script>
let timeout;

export default {
  name: 'Color',
  props: {
    color: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      alert: false,
    }
  },
  methods: {
    copyToClipboard() {
      this.alert = true;
      navigator.clipboard.writeText(`#${this.color.hex}`);
      timeout = setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
  },
  computed: {
    backgroundObject() {
      const hex = this.color.rgb.join(',');
      return {
        backgroundColor: `rgb(${hex})`,
      };
    },
    classObject() {
      return {
        'color-light': this.index > 10,
      };
    },
  },
  unmounted() {
    clearTimeout(timeout);
  }
}
</script>
