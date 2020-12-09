<template>
  <article className='post'>
    <h2>{{ article.title }}</h2>
    <div className='post-info'>
      <span>{{ articleDate }}</span>
      <span>{{ article.length }} min read</span>
    </div>
    <p>{{ article.snippet }}</p>
  </article>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    const articleDate = computed(() => new Date(props.article.date).toDateString());

    return { articleDate };
  }
}
</script>
