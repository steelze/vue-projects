<template>
  <div class="section-center" id="app">
    <form @submit.prevent="handleSubmit" class="grocery-form">
      <Alert v-if="state.alert.show" :alert="state.alert" />
      <h3>grocery bud</h3>
      <div class="form-control">
        <input type="text" v-model="state.name" class="grocery" placeholder="e.g. eggs">
        <button class="submit-btn">{{ (state.editing) ? 'edit' : 'submit' }}</button>
      </div>
    </form>
    <div class="grocery-container" v-if="state.lists.length">
      <List :items="state.lists" @remove-item="removeItem" @edit-item="editItem" />
      <button type="button" class="clear-btn" @click="clearLists">clear items</button>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue';
import List from '@/components/List.vue';
import { onUnmounted, reactive, watch } from 'vue'

function getLocalStorage() {
  let lists = localStorage.getItem('lists');
  if (lists) {
    return (lists = JSON.parse(localStorage.getItem('lists')));
  } else {
    return [];
  }
}

let timeout;

export default {
  name: 'App',
  components: {
    Alert,
    List,
  },
  setup() {
    const state = reactive({
      name: '',
      lists: getLocalStorage(),
      editing:false,
      editIndex: null,
      alert: {
        show: false,
        msg: '',
        type: ''
      },
    });

    watch(
      () => state.lists,
      (newValue) => {
        localStorage.setItem('lists', JSON.stringify(newValue));
        clearTimeout(timeout);
        timeout = setTimeout(() => showAlert(), 3000);
      }
    )

    const handleSubmit = () => {
      if (!state.name) {
        showAlert(true, 'danger', 'please enter a value');
      } else if (state.name && state.editing) {
        const items = state.lists.map((item) => {
          if (item.id === state.editIndex) {
            return { ...item, title: state.name };
          }
          return item;
        });
        state.lists = items;
        state.name = '';
        state.editIndex = null;
        state.editing = false;
        showAlert(true, 'success', 'value changed');
      } else {
        state.lists = [...state.lists, { id: new Date().getTime().toString(), title: state.name }];
        showAlert(true, 'success', 'item added to the list');
        state.name = '';
      }
    }

    const clearLists = () => {
      state.lists = [];
      showAlert(true, 'danger', 'empty list');
    }

    const removeItem = (id) => {
      state.lists = state.lists.filter(item => item.id !== id);
      showAlert(true, 'danger', 'item removed');
    }

    const editItem = (id) => {
      const item = state.lists.find((item) => item.id === id);
      state.editing = true;
      state.editIndex = id;
      state.name = item.title;
    }

    const showAlert = (show = false, type = '', msg = '') => {
      state.alert = { show, type, msg };
    }

    onUnmounted(() => clearTimeout(timeout))

    return { state, handleSubmit, clearLists, removeItem, editItem };
  }
}
</script>
