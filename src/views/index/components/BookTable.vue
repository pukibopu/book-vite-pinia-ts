<template>
  <el-table  :data="bookList" :border="border" style="width: 200%" max-height="420">
    <el-table-column prop="name" label="书名" width="200" />
    <el-table-column prop="authors" label="作者" width="200" />
    <el-table-column prop="publishData" label="时间" width="200"/>
    <el-table-column prop="press" label="出版社" width="200" />
    <el-table-column label="是否在库" prop="status"  width="200">
      <template #default="scope">
         <el-tag
          :type="scope.row.status === '有货' ? 'success' : 'danger'"
          disable-transitions
          >{{ scope.row.status }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column>
       <template #default="scope">
       <el-button :type="scope.row.status==='有货'? 'success':'warning'" :disabled="scope.row.status==='有货'? false:true " @click="buttonClick(scope.row.id)">{{scope.row.status==='无货'?'无法借阅':'借阅'}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import book from '@/api/types/book'
import { useBookList } from '@/store/bookList'
import request from '@/utils/request'
import { onMounted, ref, watch } from 'vue'
import temporaryBookList from '@/store/temporaryList'
const border:boolean = false
const bookList = ref()
const bookstore = useBookList()
watch(bookstore, (newVal, odlVal) => {
  bookList.value = bookstore.bookList
})
onMounted(() => {
  request({
    method: 'get',
    url: '/api/index/book-list'
  }).then((response: { data: book[]; }) => {
    bookstore.cate(response.data)
  })
})
function buttonClick (id:number) {
  const tempBookList = temporaryBookList()
  const books = bookstore.bookList
  for (let index = 0; index < books.length; index++) {
    const element = books[index]
    if (element.id === id) {
      tempBookList.addBook(element)
      console.log(tempBookList.getList)
    }
  }
}
</script>
