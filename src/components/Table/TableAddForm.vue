<template>
  <form @submit.prevent="handleSubmit" class="dark-form">
    <UIFormGroup>
      <UIInputText id="fullName" label="ФИО:" v-model="formData.fullName" required />
    </UIFormGroup>

    <UIFormGroup>
      <UIRadioGroup
        legend="Отделение:"
        :options="DEPARTMENTS_RADIO_LIST"
        v-model="formData.department"
        required
      />
    </UIFormGroup>

    <AppButton class="submit-button">Добавить</AppButton>
    <AppButton :type="'button'" @click="$emit('close')">Закрыть</AppButton>
  </form>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import AppButton from '@/components/Common/AppButton.vue'
import UIFormGroup from '@/components/UI/UIFormGroup.vue'
import UIInputText from '@/components/UI/UIInputText.vue'
import UIRadioGroup from '@/components/UI/UIRadioGroup.vue'
import { useConstants } from '@/composables/useConstants.ts'

const { DEPARTMENTS_RADIO_LIST } = useConstants()

interface formData {
  fullName: string
  department: string
}

const formData: Ref<formData> = ref({
  fullName: '',
  department: 'Кардиология',
})

const handleSubmit = () => {
  emit('submit', {
    fullName: formData.value.fullName,
    department: formData.value.department,
  })

  formData.value.fullName = ''
  formData.value.department = ''
}

const emit = defineEmits<{
  (event: 'submit', data: { fullName: string; department: string }): void
  (event: 'close'): void
}>()
</script>

<style scoped>
.dark-form {
  max-width: 400px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.form-group label,
legend {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-group input[type='text'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #ffffff;
  font-size: 16px;
}

.form-group input[type='text']::placeholder {
  color: #888;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-group input[type='radio'] {
  accent-color: #4caf50; /* Цвет выбранной радиокнопки */
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin-bottom: 20px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
