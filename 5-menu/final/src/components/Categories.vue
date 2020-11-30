<template>
  <div class="btn-container">
    <button
      type="button"
      class="filter-btn"
      v-for="(category, index) in categories"
      :key="index"
      @click="$emit('filter-items', category)">
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    categories: {
      type: Array,
      required: true,
    }
  },
}
</script>
