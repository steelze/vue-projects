<template>
  <section class="error-page section">
    <div class="error-container">
      <h1>oops! it's a dead end</h1>
      <router-link :to="{ name: 'home' }" class="btn btn-primary">
        back home
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Error',
}
</script>
