<template>
  <div class="p-5">

    <el-table :data="temporaryBookList().tempBookList" max-height="600" :table-layout="'auto'"
      @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="100" />
      <el-table-column width="180">
        <template #default="scope">
          <img :src="'public/book/' + scope.row.imageUrl" style="width: 180px;">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="书名" width="180" />
      <el-table-column prop="authors" label="作者" width="180" />
      <el-table-column prop="press" label="出版社" width="180" />
      <el-table-column prop="description" label="描述" width="400" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button :type="'danger'" @click="deleteFromPage(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="p-5 float-right">
      <el-button :type="'success'" :size="'large'" class="w-500" id="button1">借阅书籍</el-button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import Book from '@/api/types/book'
import router from '@/routers/main'
import temporaryBookList from '@/store/temporaryList'
import request from '@/utils/request'
import { ref } from 'vue'
const multipleSelection = ref<Book[]>([])
const handleSelectionChange = async (val: Book[]) => {
  multipleSelection.value = val
  request.post('/api/borrow/borrow-books', { books: JSON.stringify(multipleSelection.value) })
}

async function deleteFromPage (id: number) {
  temporaryBookList().removeOneBook(id)
  router.go(0)
}

</script>

<style lang="scss" >
</style>
