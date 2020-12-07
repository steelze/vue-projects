<template>
  <main>
    <div class="section-title">
      <h1>{{ loading ? 'loading...' : 'pagination' }}</h1>
      <div class="underline"></div>
    </div>
    <section class="followers">
      <div class="container">
        <Follower v-for="follower in followers" :key="follower.id" :follower="follower" />
      </div>
      <div v-if="!loading" class="btn-container">
        <button class="prev-btn" @click="prevPage">
          prev
        </button>
        <button v-for="(item, index) in data" :key="index" class="page-btn" :class="index === page ? 'active-btn' : ''" @click="handlePage(index)">
          {{  index + 1 }}
        </button>
        <button class="next-btn" @click="nextPage">
          next
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import { ref, watch } from 'vue';
import Follower from '@/components/Follower.vue';
import useFetch from '@/hooks/useFetch';

export default {
  name: 'App',
  components: {
    Follower
  },
  setup() {
    const { loading, data } = useFetch();
    const page = ref(0);
    const followers = ref([]);

    watch([loading, page], ([currentLoadingStatus, newPage]) => {
      if (currentLoadingStatus) return;
      followers.value = data.value[newPage];
    });

    const nextPage = () => {
      let nextPage = page.value + 1
      if (nextPage > data.value.length - 1) nextPage = 0;
      page.value = nextPage;
    }

    const prevPage = () => {
      let prevPage = page.value - 1
      if (prevPage < 0) prevPage = data.value.length - 1;
      page.value = prevPage;
    }

    const handlePage = index => page.value = index;

    return { loading, data, followers, handlePage, nextPage, prevPage, page };
  },
}
</script>
