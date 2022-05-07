<template>
        <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#2e3759"
    active-text-color="#fff"
    text-color="#fff"
    router
  >
  <el-menu-item index="#1">登录</el-menu-item>
  <el-menu-item index="#2">借阅列表</el-menu-item>
  <el-menu-item index="#3">用户列表</el-menu-item>
    <el-menu-item index="">主页</el-menu-item>

  </el-menu>
</template>
<script lang="ts" setup>

const activeIndex2 = '/index'
</script>
<style lang="scss" scoped>
.el-menu {
  flex-direction: row-reverse;
  border: 0;
}
</style>
