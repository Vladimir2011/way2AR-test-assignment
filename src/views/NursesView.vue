<template>
  <UIContainer>
    <h1>Медсестры</h1>
    <Table :tableData="nurses" @delete-item="removeNurse" @update-item="editNurse" />
    <AppButton v-if="!isFormVisible" type="button" @click="toggleFormVisibility"
      >Добавить медсестру</AppButton
    >
    <TableAddForm v-else @close="toggleFormVisibility" @submit="addNurse" />

    <TableEditForm
      v-if="selectedNurse"
      :initial-data="selectedNurse"
      @submit="editFormSubmit"
      @close="selectedItem = null"
      @close-by-click="selectedNurse = null"
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
const { nurses } = storeToRefs(doctorsAndNursesStore)

const isFormVisible: Ref<boolean> = ref(false)
const selectedNurse: Ref<selectedItemType | null> = ref(null)

const removeNurse = (id: number) => {
  doctorsAndNursesStore.deleteNurse(id)
}

const addNurse = (data: { fullName: string; department: string }) => {
  doctorsAndNursesStore.addNurse(data.fullName, data.department)
}

const editNurse = (id: number) => {
  const nurse = nurses.value.find((nurse) => nurse.id === id)
  if (nurse) {
    selectedNurse.value = { ...nurse }
  }
}

const editFormSubmit = (data: { fullName: string; department: string }) => {
  if (selectedNurse.value) {
    doctorsAndNursesStore.updateNurse(data.fullName, data.department, selectedNurse.value.id)
    selectedNurse.value = null
  }
}

const toggleFormVisibility = () => {
  isFormVisible.value = !isFormVisible.value
}
</script>

<style></style>
