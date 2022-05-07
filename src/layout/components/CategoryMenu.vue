<template>
 <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2e3759"
    active-text-color="#fff"
    text-color="#fff"
    router
      >
        <el-menu-item index="#1">
          <el-icon><icon-menu /></el-icon>
          <span>科幻</span>
        </el-menu-item>
        <el-menu-item index="#2">
          <el-icon><icon-menu /></el-icon>
          <span>历史</span>
        </el-menu-item>
        <el-menu-item index="#3">
          <el-icon><icon-menu /></el-icon>
          <span>人文</span>
        </el-menu-item>
      </el-menu>
</template>
<script lang="ts" setup>
import {
  Menu as IconMenu
} from '@element-plus/icons-vue'

</script>
<style lang="scss" scoped>

</style>
