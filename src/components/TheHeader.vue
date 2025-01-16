<template>
  <header class="header">
    <nav class="header__nav nav">
      <RouterLink class="nav__link" to="/doctors">Врачи</RouterLink>
      <RouterLink class="nav__link" to="/nurses">Медсестры</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  max-width: 1920px;
  margin: 0 auto;
  padding: 16px;
  border-bottom: 1px solid var(--vt-c-text-dark-2);
  width: 100%;
  .nav {
    display: flex;
    gap: 16px;
    width: 100%;
    .nav__link {
      font-size: 20px;
      line-height: 1.2;
      text-decoration: none;
      color: var(--vt-c-white-soft);
    }

    .router-link-active {
      color: var(--vt-c-text-dark-2);
      text-decoration: underline;
    }
  }
}
</style>
