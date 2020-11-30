<template>
  <article class="person">
    <img :src="person.image" :alt="person.name">
    <div>
      <h4>{{ person.name }}</h4>
      <p>{{ person.age }} years</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'List',
  props: {
    person: {
      type: Object,
      required: true,
    }
  }
}
</script>

