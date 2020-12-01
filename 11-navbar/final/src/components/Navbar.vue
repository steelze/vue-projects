<template>
  <nav>
    <div class="nav-center">
      <div class="nav-header">
        <img src="../assets/logo.svg" alt="logo">
        <button type="button" class="nav-toggle" @click="showLinks = !showLinks">
          <i class="material-icons">horizontal_split</i>
        </button>
      </div>
      <div class="links-container" ref="linksContainerRef">
        <ul class="links" ref="linksRef">
          <li v-for="link in links" :key="link.id">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <ul class="social-icons">
        <li v-for="social in socials" :key="social.id">
          <a :href="social.url" target="blank"><i class="fa" :class="social.icon"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, watch } from 'vue';
import { link, social } from '@/utils/data';

export default {
  name: 'Navbar',
  setup() {
    const links = ref(link);
    const socials =  ref(social);
    const showLinks = ref(false);
    const linksContainerRef = ref(null);
    const linksRef = ref(null);

    watch(showLinks, (visible) => {
      const linksHeight = linksRef.value.getBoundingClientRect().height;
      linksContainerRef.value.style.height = (visible) ? `${linksHeight}px` : '0px';
    });

    return { links, socials, showLinks, linksRef, linksContainerRef };
  }
}
</script>
