<template>
        <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo  border-0"
    mode="horizontal"
    background-color="#3b82f6"
    active-text-color="#eff6ff"
    text-color="#fff"
    router
  >

  <el-sub-menu  v-if="reader!=''" index="reader">
  <template #title>
    {{reader.name}}
  </template>
  <el-menu-item index="#2">用户中心</el-menu-item>
  <el-menu-item index="#3" @click="exitReader">注销</el-menu-item>
  </el-sub-menu>
  <el-menu-item  v-else-if="reader==''" index="login">登录</el-menu-item>
  <el-badge :value="1">
    <el-menu-item index="book_cart">借阅列表</el-menu-item>
  </el-badge>
  <el-menu-item index="/">主页</el-menu-item>

  </el-menu>
</template>
<script lang="ts" setup>
import { useReaderStore } from '@/store/readerState'
import { Reader } from '@/api/types/reader'
import { onMounted, ref } from 'vue'
import router from '@/routers/main'
import temporaryBookList from '@/store/temporaryList'
const readerState = useReaderStore()
const books = temporaryBookList()
const reader = ref<any|Reader>({})
reader.value = readerState.reader
onMounted(() => {
  reader.value = readerState.reader
})
const activeIndex2 = '/index'
const exitReader = () => {
  readerState.removeReader()
  books.removeBooks()
  router.go(0)
}
</script>
<style lang="scss" scoped>
.el-menu {
  flex-direction: row-reverse;
  border: 0;
}
</style>
