<template>
  <section class="section">
    <div class="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div class="section-center">
      <article
        v-for="(person, index) in people"
        :key="person.id"
        :class="[(index === counter - 1 || (counter === 0 && index === people.length - 1)) ? 'lastSlide' : (index === counter) ? 'activeSlide' : 'nextSlide']"
      >
        <img :src="person.image" :alt="person.name" class="person-img" />
        <h4>{{ person.name }}</h4>
        <p class="title">{{ person.title }}</p>
        <p class="text">{{ person.quote }}</p>
        <i class="material-icons icon">format_quote</i>
      </article>
      <button type="button" class="prev" @click="counter--">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
      <button type="button" class="next" @click="counter++">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  </section>
</template>

<script>
import data from '@/utils/data';
let slider;

export default {
  name: 'App',
  mounted() {
    slider = setInterval(() => {
      this.counter++;
    }, 5000);
  },
  watch: {
    counter(current) {
      const lastIndex = this.people.length - 1;
      if (current < 0) this.counter = lastIndex;
      else if (current > lastIndex)  this.counter = 0;
    }
  },
  data() {
    return {
      people: data,
      counter: 0,
    }
  },
  unmounted() {
    clearInterval(slider);
  },
}
</script>
