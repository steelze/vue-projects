<template>
  <div class="loading" v-if="loading"></div>
  <section v-else className="stories">
    <article v-for="hit in hits" :key="hit.objectID" className="story">
      <h4 className="title">{{ hit.title }}</h4>
      <p className="info">
        {{ hit.points }} points by <span>{{ hit.author }} | </span> {{ hit.num_comments }} comments
      </p>
      <div>
        <a :href="hit.url" className="read-link" target="_blank" rel="noopener noreferrer">
          read more
        </a>
        <button className="remove-btn" @click="removeStory(hit.objectID)">remove</button>
      </div>
    </article>
  </section>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Stories',
  setup() {
    const { loading, hits, removeStory } = useGlobalContext();

    return { loading, hits, removeStory };
  },

}
</script>
