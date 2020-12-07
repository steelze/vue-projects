<template>
  <article class="card">
    <img :src="follower.avatar_url" :alt="follower.login" />
    <h4>{{ follower.login }}</h4>
    <a :href="follower.html_url" class="btn" target="blank">
      view profile
    </a>
  </article>
</template>

<script>
export default {
  name: 'Follower',
  props: {
    follower: {
      type: Object,
      required: true,
    },
  },
}
</script>
