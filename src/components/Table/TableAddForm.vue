<template>
  <form @submit.prevent="handleSubmit" class="dark-form">
    <div class="form-group">
      <label for="fullName">ФИО:</label>
      <input
        type="text"
        id="fullName"
        v-model="formData.fullName"
        placeholder="Введите ваше ФИО"
        required
      />
    </div>

    <div class="form-group">
      <label>Отделение:</label>
      <div class="radio-group">
        <label>
          <input type="radio" v-model="formData.department" value="Хирургия" required />
          Хирургия
        </label>
        <label>
          <input type="radio" v-model="formData.department" value="Кардиология" required />
          Кардиология
        </label>
      </div>
    </div>

    <button type="submit" class="submit-button">Отправить</button>
    <AppButton type="button" @click="$emit('close')">Закрыть</AppButton>
  </form>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import AppButton from '@/components/Common/AppButton.vue'

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

.form-group {
  margin-bottom: 20px;
}

.form-group label {
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
