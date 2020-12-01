<template>
  <p class="alert" :class="`alert-${alert.type}`">{{ alert.msg }}</p>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    alert: {
      type: Object,
      required: true,
    },
  },
}
</script>
