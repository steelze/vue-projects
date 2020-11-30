<template>
  <main>
    <section class="container">
      <div class="title">
        <h2>our reviews</h2>
        <div class="underline"></div>
      </div>
      <Review />
    </section>
  </main>
</template>

<script>
import Review from '@/components/Review.vue';

export default {
  name: 'App',
  components: {
    Review,
  },
}
</script>
