<template>
  <Loading />
  <Tour />
</template>

<script>
import Loading from '@/components/Loading.vue';
import Tour from '@/components/Tour.vue';

// const url = 'https://course-api.com/react-tours-project';

export default {
  name: 'App',
  components: {
    Loading,
    Tour,
  },
}
</script>
