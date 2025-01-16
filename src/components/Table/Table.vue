<template>
  <div class="table_component" role="region" tabindex="0">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>ФИО</th>
          <th>Отделение</th>
          <th><br /></th>
        </tr>
      </thead>
      <tbody>
        <TableItem
          v-for="(item, index) in props.tableData"
          :key="index"
          :index="index"
          :tableItem="item"
          @delete="$emit('delete-item', item.id)"
          @update="$emit('update-item', item.id)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { DoctorType, NurseType } from '@/types/types.ts'
import TableItem from '@/components/Table/TableItem.vue'

interface TableProps {
  tableData: DoctorType[] | NurseType[]
}

const props = withDefaults(defineProps<TableProps>(), {
  tableData: () => [],
})

defineEmits(['delete-item', 'update-item'])
</script>

<style scoped>
.table_component {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  margin-bottom: 20px;
}

.table_component table {
  border: 1px solid var(--vt-c-text-dark-2);
  height: 100%;
  width: 100%;
  min-width: 1000px;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: left;
}

.table_component caption {
  caption-side: top;
  text-align: left;
}

.table_component th {
  border: 1px solid var(--vt-c-text-dark-2);
  background-color: transparent;
  padding: 10px;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  text-decoration: none;
  color: var(--vt-c-white-soft);
}

th:first-child {
  width: 70px;
  text-align: center;
}

th:last-child {
  width: 80px;
  text-align: center;
}
</style>
