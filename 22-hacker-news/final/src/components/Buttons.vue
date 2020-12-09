<template>
  <div class="btn-container">
    <button :disabled="loading" @click="handlePage('dec')">prev</button>
    <p>{{ page + 1 }} of {{ nbPages }}</p>
    <button :disabled="loading" @click="handlePage('inc')">next</button>
  </div>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Buttons',
  setup() {
    const { loading, page, nbPages, handlePage } = useGlobalContext();

    return { loading, page, nbPages, handlePage };
  },
}
</script>
