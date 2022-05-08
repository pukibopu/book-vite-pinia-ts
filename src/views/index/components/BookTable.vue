<template>
  <el-table :data="bookList" :border="border" style="width: 200%" max-height="320">
    <el-table-column prop="name" label="书名" width="180" />
    <el-table-column prop="authors" label="作者" width="180" />
    <el-table-column prop="publishData" label="时间" width="180"/>
    <el-table-column prop="press" label="出版社" />
  </el-table>
</template>

<script lang="ts" setup>
import book from '@/api/types/book'
import { useBookList } from '@/store/bookList'
import request from '@/utils/request'
import { onMounted, ref } from 'vue'

const border:boolean = false
const bookList = ref()
const store = useBookList()
onMounted(() => {
  request({
    method: 'get',
    url: '/api/index/book-list'
  }).then((response: { data: book[]; }) => {
    store.cate(response.data)
  })
  bookList.value = store.bookList
})

</script>
