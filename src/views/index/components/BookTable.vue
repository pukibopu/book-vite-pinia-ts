<template>
  <el-table :data="tableData" :border="border" style="width: 100%" max-height="250">
    <el-table-column prop="name" label="书名" width="180" />
    <el-table-column prop="writer" label="作者" width="180" />
    <el-table-column prop="time" label="时间" width="180"/>
    <el-table-column prop="com" label="出版社" />
  </el-table>
</template>

<script lang="ts" setup>
const border:boolean = false
const tableData = [
  {
    name: 'This is Where We Ar',
    writer: '普利西亚',
    time: '2013年11月22日',
    com: '清华大学出版社'

  },
  {
    name: 'This is Where We Ar',
    writer: '普利西亚',
    time: '2013年11月22日',
    com: '清华大学出版社'

  },
  {
    name: 'This is Where We Ar',
    writer: '普利西亚',
    time: '2013年11月22日',
    com: '清华大学出版社'

  },
  {
    name: 'This is Where We Ar',
    writer: '普利西亚',
    time: '2013年11月22日',
    com: '清华大学出版社'

  },
  {
    name: 'This is Where We Ar',
    writer: '普利西亚',
    time: '2013年11月22日',
    com: '清华大学出版社'

  },
  {
    name: 'This is Where We Ar',
    writer: '普利西亚',
    time: '2013年11月22日',
    com: '清华大学出版社'

  }
]
</script>
