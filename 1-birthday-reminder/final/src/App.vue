<template>
  <main>
    <section class="container">
      <h3>{{ people.length }} birthdays today</h3>
      <List v-for="person in people" :key="person.id" :person="person" />
      <button @click="clearList">Clear All</button>
    </section>
  </main>
</template>

<script>
import List from '@/components/List.vue';
import data from '@/utils/data';

export default {
  name: 'App',
  components: {
    List,
  },
  data() {
    return {
      people: data,
    }
  },
  methods: {
    clearList() {
      this.people = [];
    }
  }
}
</script>

<style scoped>
  h3 {
    text-align: center;
  }
</style>
