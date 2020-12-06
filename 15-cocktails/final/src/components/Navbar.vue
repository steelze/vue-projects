<template>
  <nav class="navbar">
    <div class="nav-center">
      <router-link :to="{ name: 'home' }">
        <img src="../assets/logo.svg" alt="logo" class="logo">
      </router-link>
      <ul class="nav-links">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
