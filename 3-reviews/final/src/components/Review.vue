<template>
  <article class="review">
    <div class="img-container">
      <img :src="person.image" :alt="person.name" class="person-img">
      <span class="quote-icon">
        <span class="material-icons">format_quote</span>
      </span>
    </div>
    <h4 class="author">{{ person.name }}</h4>
    <p class="job">{{ person.job }}</p>
    <p class="info">{{ person.text }}</p>
    <div class="button-container">
      <button type="button" @click="prevPerson" class="prev-btn"><span class="material-icons">keyboard_arrow_left</span></button>
      <button type="button" @click="nextPerson" class="next-btn"><span class="material-icons">keyboard_arrow_right</span></button>
    </div>
    <button type="button" @click="randomPerson" class="random-btn">suprise me</button>
  </article>
</template>

<script>
import data from '@/utils/data';
const total = data.length - 1;

export default {
  name: 'Review',
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    checkNumber(number) {
      if (number > total) return 0;
      else if (number < 0) return total;
      else return number;
    },
    prevPerson() {
      const index = this.index - 1;
      this.index = this.checkNumber(index);
    },
    nextPerson() {
      const index = this.index + 1;
      this.index = this.checkNumber(index);
    },
    randomPerson() {
      let randomNumber = Math.floor(Math.random() * total);
      if (randomNumber === this.index) randomNumber = this.index + 1;
      this.index = this.checkNumber(randomNumber);
    },
  },
  computed: {
    person() {
      return data[this.index];
    }
  }
}
</script>
