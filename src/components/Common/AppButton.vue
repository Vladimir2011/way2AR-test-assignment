<template>
  <button @click="$emit('click')" class="button" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { validateButtonType } from '@/types/types'

type ButtonType = 'submit' | 'button' | 'reset'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'submit',
    validator: validateButtonType,
  },
})

defineEmits(['click'])
</script>

<style scoped>
.button {
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  padding: 10px 0;
  border-radius: 6px;
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white-soft);
  border: 1px solid var(--vt-c-white-soft);

  font-size: 18px;
}
</style>
