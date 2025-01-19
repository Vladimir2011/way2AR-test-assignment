<template>
  <label :for="id">{{ label }}</label>
  <input
    :type="type"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<script setup lang="ts">
interface Props {
  id: string
  label: string
  type?: string
  modelValue: string
  placeholder?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #ffffff;
  font-size: 16px;
}
</style>
