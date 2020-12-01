<template>
  <nav class="nav" @mouseover="handleSubmenu">
    <div class="nav-center">
      <div class="nav-header">
        <img src="../assets/logo.svg" alt="stripe" class="nav-logo">
        <button class="btn toggle-btn" @click="$emit('open-sidebar')">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <ul class="nav-links">
        <li>
          <button class="link-btn" @mouseover="displaySubmenu">products</button>
        </li>
        <li>
          <button class="link-btn" @mouseover="displaySubmenu">developers</button>
        </li>
        <li>
          <button class="link-btn" @mouseover="displaySubmenu">company</button>
        </li>
      </ul>
      <button class="btn sign-in-btn">Sign in</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  setup(_, { emit }) {
    function displaySubmenu(e) {
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom - 3;
      emit('open-submenu', { page, center, bottom });
    }
    function handleSubmenu(e) {
      if (!e.target.classList.contains('link-btn')) {
        emit('close-submenu');
      }
    }

    return { displaySubmenu, handleSubmenu };
  },
}
</script>
