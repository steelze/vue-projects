<template>
  <aside class="sidebar" :class="sideBarClasses">
    <div class="sidebar-header">
      <img src="../assets/logo.svg" class="logo" alt="coding addict" />
      <button type="button" class="close-btn" @click="$emit('close-sidebar')">
        <i class="fa fa-times"></i>
      </button>
    </div>
    <ul class="links">
      <li v-for="link in links" :key="link.id">
        <a :href="link.url"> <i class="fa" :class="link.icon"></i> {{ link.text }}</a>
      </li>
    </ul>
    <ul class="social-icons">
      <li v-for="social in socials" :key="social.id">
        <a :href="social.url"><i class="fa" :class="social.icon"></i></a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { computed, ref } from 'vue';
import { social, link } from '@/utils/data';

export default {
  name: 'Sidebar',
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const links = ref(link);
    const socials = ref(social);

    const sideBarClasses = computed(() => ({
      'show-sidebar': props.isSidebarOpen,
    }));

    return { links, socials, sideBarClasses };
  },
}
</script>
