<template>
<el-row>
    <el-col :span="23">
     <el-input
      v-model="input"
      placeholder="输入书名"
      class="input-with-select"
    ></el-input>
    </el-col>
    <el-col :span="1">
   <el-button :icon="Search" @click="doSearch"/>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import { useBookList } from '@/store/bookList'
import request from '@/utils/request'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
const store = useBookList()
const doSearch = () => {
  request({
    method: 'get',
    url: '/api/index/book-search?name=' + input.value
  }).then((response) => {
    store.cate(response.data)
  })
}
</script>
<style scoped lang="scss"></style>
