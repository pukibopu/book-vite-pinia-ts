<template>
 <el-menu

        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2e3759"
    active-text-color="#fff"
    text-color="#fff"
    v-for="(value, key) in cates"
    :key="key"
      >
        <el-menu-item index="" @click="updatecateInfo(key+1)">
          <el-icon><icon-menu /></el-icon>
          <span>{{value.name}}</span>
        </el-menu-item>
      </el-menu>
</template>
<script lang="ts" setup>
import {
  Menu as IconMenu
} from '@element-plus/icons-vue'
import request from '@/utils/request'
import { onMounted, ref } from 'vue'
import { Category } from '@/api/types/category'
import { useBookList } from '@/store/bookList'
const cates = ref < Category[] >([])
const store = useBookList()
onMounted(() => {
  request({
    method: 'get',
    url: '/api/index/category'
  }).then((response) => {
    cates.value = response.data
  })
})
const updatecateInfo = (index: any) => {
  request({
    method: 'get',
    url: '/api/index/book-cate?cid=' + index
  }).then((response) => {
    store.cate(response.data)
  })
}
</script>
<style lang="scss" scoped>

</style>
