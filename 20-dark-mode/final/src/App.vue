<template>
  <main>
    <nav>
      <div class="nav-center">
        <h1>overreacted</h1>
        <button class="btn" @click="toggleTheme">
          toggle
        </button>
      </div>
    </nav>
    <section class="articles">
      <Article v-for="article in articles" :key="article.id" :article="article" />;
    </section>
  </main>
</template>

<script>
import { ref, watch } from 'vue';
import Article from '@/components/Article.vue';
import data from '@/utils/data';

const getStorageTheme = () => (localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'light-theme';

export default {
  name: 'App',
  components: {
    Article,
  },
  setup() {
    const articles = data;
    const theme = ref(getStorageTheme());

    watch(theme, () => {
      document.documentElement.className = theme.value;
      localStorage.setItem('theme', theme.value);
    }, { immediate: true });

    const toggleTheme = () => theme.value = (theme.value === 'light-theme') ? 'dark-theme' : 'light-theme';

    return { articles, toggleTheme };
  }
}
</script>
