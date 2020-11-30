<template>
  <article class="single-tour">
    <img :src="image" :alt="name">
    <footer>
      <div class="tour-info">
        <h4>{{ name }}</h4>
        <h4 class="tour-price">${{ price }}</h4>
      </div>
      <p>
        {{ readMore ? info : `${info.substring(0, 200)}...` }}
        <button type="button" @click="readMore = !readMore">{{ readMore ? 'show less' : 'read more' }}</button>
      </p>
      <button type="button" class="delete-btn" @click="$emit('remove-tour', id)">not interested</button>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'Tour',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      readMore: false,
    }
  },
}
</script>
