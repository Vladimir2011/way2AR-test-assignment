<template>
  <UIContainer>
    <h1>Врачи</h1>
    <Table :tableData="doctors" @delete-item="removeDoctor" @update-item="editDoctor" />
    <AppButton v-if="!isFormVisible" type="button" @click="toggleFormVisibility"
      >Добавить врача</AppButton
    >
    <TableAddForm v-else @close="toggleFormVisibility" @submit="addDoctor" />

    <TableEditForm
      v-if="selectedDoctor"
      :initial-data="selectedDoctor"
      @submit="editFormSubmit"
      @close="selectedItem = null"
      @close-by-click="selectedDoctor = null"
    />
  </UIContainer>
</template>

<script setup lang="ts">
import UIContainer from '@/components/UI/UIContainer.vue'
import Table from '@/components/Table/Table.vue'
import { useDoctorsAndNursesStore } from '@/stores/useDoctorsAndNursesStore'
import { storeToRefs } from 'pinia'
import AppButton from '@/components/Common/AppButton.vue'
import TableAddForm from '@/components/Table/TableAddForm.vue'
import { ref, Ref } from 'vue'
import TableEditForm from '@/components/Table/TableEditForm.vue'

type selectedItemType = {
  name: string
  department: string
  id: number
}

const doctorsAndNursesStore = useDoctorsAndNursesStore()
const isFormVisible: Ref<boolean> = ref(false)

const { doctors } = storeToRefs(doctorsAndNursesStore)
const selectedDoctor: Ref<selectedItemType | null> = ref(null)

const removeDoctor = (id: number) => {
  doctorsAndNursesStore.deleteDoctor(id)
}

const addDoctor = (data: { fullName: string; department: string }) => {
  doctorsAndNursesStore.addDoctor(data.fullName, data.department)
}

const editDoctor = (id: number) => {
  const doctor = doctors.value.find((doctor) => doctor.id === id)
  if (doctor) {
    selectedDoctor.value = { ...doctor }
  }
}

const editFormSubmit = (data: { fullName: string; department: string }) => {
  if (selectedDoctor.value) {
    doctorsAndNursesStore.updateDoctor(data.fullName, data.department, selectedDoctor.value.id)
    selectedDoctor.value = null
  }
}

const toggleFormVisibility = () => {
  isFormVisible.value = !isFormVisible.value
}
</script>
