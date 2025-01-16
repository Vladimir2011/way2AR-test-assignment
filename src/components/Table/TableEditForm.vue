<template>
  <form @submit.prevent="handleSubmit" class="dark-form">
    <span class="header-edit">Изменить данные</span>
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

    <button type="submit" class="submit-button">Сохранить изменения</button>
    <AppButton type="button" @click="$emit('close-by-click')">Закрыть</AppButton>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AppButton from '@/components/Common/AppButton.vue'

// Определяем событие, которое будет отправлять данные формы
const emit = defineEmits<{
  (event: 'submit', data: { fullName: string; department: string }): void
  (event: 'close-by-click'): void
}>()

// Пропсы для передачи данных элемента
const props = defineProps<{
  initialData: {
    name: string
    department: string
  }
}>()

const formData = ref({
  fullName: props.initialData.name,
  department: props.initialData.department,
})

watch(
  () => props.initialData,
  (newData) => {
    formData.value.fullName = newData.fullName
    formData.value.department = newData.department
  },
  { deep: true },
)

const handleSubmit = () => {
  emit('submit', {
    fullName: formData.value.fullName,
    department: formData.value.department,
  })
}
</script>

<style scoped>
.header-edit {
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
}

.dark-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #ffffff;
  font-family: Arial, sans-serif;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 16px);
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
  accent-color: #4caf50;
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
