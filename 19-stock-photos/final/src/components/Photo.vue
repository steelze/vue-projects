<template>
  <article class="photo">
    <img :src="photo.urls.regular" :alt="photo.alt_description" />
    <div class="photo-info">
      <div>
        <h4>{{ photo.user.name }}</h4>
        <p>{{ photo.likes }} likes</p>
      </div>
      <a :href="photo.user.portfolio_url">
        <img :src="photo.user.profile_image.medium" alt="" class="user-img" />
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: {
      type: Object,
      required: true,
    }
  }
}
</script>

