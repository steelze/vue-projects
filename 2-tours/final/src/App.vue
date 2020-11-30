<template>
  <main>
    <Loading v-if="loading" />
    <div class="title" v-else-if="!tours.length">
      <h2>No tours left</h2>
      <button type="button" class="btn" @click="fetchTours">refresh</button>
    </div>
    <section v-else>
      <div class="title">
        <h2>our tours</h2>
        <div class="underline"></div>
      </div>
      <div>
        <Tour v-for="tour in tours" :key="tour.id" v-bind="tour" @remove-tour="removeTour" />
      </div>
    </section>
  </main>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Tour from '@/components/Tour.vue';

const url = 'https://course-api.com/react-tours-project';

export default {
  name: 'App',
  components: {
    Loading,
    Tour,
  },
  mounted() {
    this.fetchTours();
  },
  data() {
    return {
      loading: true,
      tours: [],
    }
  },
  methods: {
    async fetchTours() {
      try {
        this.loading = true;
        const res = await fetch(url);
        this.tours = await res.json();
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    removeTour(id) {
      const tours = this.tours;
      this.tours = tours.filter((tour) => tour.id !== id);
    }
  }
}
</script>
