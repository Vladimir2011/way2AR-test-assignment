<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ tableItem.name }} <span v-if="tableItem.isManager">(Заведующий)</span></td>
    <td>{{ tableItem.department }}</td>
    <td class="icons-cell">
      <img
        src="@/assets/icons/trash-icon.svg"
        alt="trash-icon"
        class="delete-icon"
        @click="$emit('delete', tableItem.id)"
      />
      <img
        src="@/assets/icons/edit-icon.svg"
        alt="edit-icon"
        @click="$emit('update', tableItem.id)"
      />
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { DoctorType, NurseType } from '@/types/types.ts'

interface TableItemProps {
  tableItem: DoctorType | NurseType
  index: number
}

const props = withDefaults(defineProps<TableItemProps>(), {
  tableItem: () => ({}),
  index: 0,
})

const emit = defineEmits<{
  (event: 'delete', id: number): void
  (event: 'update', id: number): void
}>()
</script>

<style scoped>
td {
  border: 1px solid var(--vt-c-text-dark-2);
  background-color: transparent;
  padding: 10px;

  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  text-decoration: none;
  color: var(--vt-c-white-soft);
}

td:first-child {
  width: 70px;
  text-align: center;
}

td:last-child {
  width: 80px;
  text-align: center;
  cursor: pointer;
}

.icons-cell {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
