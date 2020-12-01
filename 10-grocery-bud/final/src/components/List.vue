<template>
  <div class="grocery-list">
    <article class="grocery-item" v-for="item in items" :key="item.id">
      <p class="title">{{ item.title }}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn" @click="editItem(item.id)">
          <i class="material-icons">create</i>
        </button>
        <button type="button" class="delete-btn" @click="removeItem(item.id)">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  setup(_, { emit }) {
    const editItem = (id) => emit('edit-item', id);
    const removeItem = (id) => emit('remove-item', id);

    return { editItem, removeItem };
  },
}
</script>
