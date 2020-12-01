<template>
  <div class="sidebar-wrapper" :class="sideBarClasses">
    <aside class="sidebar">
      <button class="close-btn" @click="$emit('close-sidebar')">
        <i class="fa fa-times"></i>
      </button>
      <div class="sidebar-links">
        <article v-for="(link, index) in links" :key="index">
          <h4>{{ link.page }}</h4>
          <div class="sidebar-sublinks">
            <a v-for="(sub, index) in link.links" :key="index" :href="sub.url">
              <i class="fa" :class="sub.icon"></i> {{ sub.label }}
            </a>
          </div>
        </article>
      </div>
    </aside>
  </div>
</template>

<script>
import sublinks from '@/utils/data';
import { computed, ref } from 'vue';

export default {
  name: 'Sidebar',
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const links = ref(sublinks);
    const sideBarClasses = computed(() => ({'show': props.isSidebarOpen}));

    return { links, sideBarClasses };
  }
}
</script>
