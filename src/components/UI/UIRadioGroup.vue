<template>
  <fieldset>
    <legend>{{ legend }}</legend>
    <div class="radio-group">
      <label v-for="option in options" :key="option.value">
        <input
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="$emit('update:modelValue', option.value)"
          :required="required"
        />
        {{ option.label }}
      </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
interface Option {
  value: string
  label: string
}

interface Props {
  legend: string
  options: Option[]
  modelValue: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
fieldset {
  border: 1px solid #444;
  border-radius: 4px;
  padding: 10px;
}

legend {
  font-weight: bold;
  padding: 0 5px;
}

.radio-group {
  display: flex;
  gap: 20px;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
}

input[type='radio'] {
  accent-color: #4caf50;
}
</style>
