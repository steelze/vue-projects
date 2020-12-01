<template>
  <main>
    <button type="button" @click="$emit('open-sidebar')" class="sidebar-toggle">
      <i class="fa fa-bars"></i>
    </button>
    <button type="button" @click="$emit('open-modal')" class="btn">
      show modal
    </button>
  </main>
</template>

<script>
export default {
  name: 'Home',
}
</script>
