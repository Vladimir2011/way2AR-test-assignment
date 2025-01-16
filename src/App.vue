<template>
  <div class="page-content">
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDoctorsAndNursesStore } from './stores/useDoctorsAndNursesStore'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import { onMounted } from 'vue'

const store = useDoctorsAndNursesStore()

onMounted(() => {
  store.loadMockData()
})
</script>

<style scoped></style>
