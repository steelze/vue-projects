<template>
  <aside class="submenu" :class="subMenuClasses" :style="containerStyle">
    <section>
      <h4>{{ submenu.page }}</h4>
      <div class="submenu-center" :class="columnSize">
        <a v-for="(link, index) in submenu.links" :key="index" :href="link.url">
          <i class="fa" :class="link.icon"></i>
           {{ link.label }}
        </a>
      </div>
    </section>
  </aside>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Submenu',
  props: {
    isSubmenuOpen: {
      type: Boolean,
      required: true,
    },
    submenu: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const subMenuClasses = computed(() => ({'show': props.isSubmenuOpen}));
    const containerStyle = computed(() => {
      return {
        left: `${props.submenu.center}px`,
        top: `${props.submenu.bottom}px`,
      }
    });
    const columnSize = computed(() => {
      return {
        'col-2': props.submenu.links.length < 3,
        'col-3': props.submenu.links.length === 3,
        'col-4': props.submenu.links.length > 3,
      }
    });

    return { subMenuClasses, containerStyle, columnSize };
  },
}
</script>
