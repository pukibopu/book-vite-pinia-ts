<template>
   <div class="common-layout">
    <el-container>
      <el-header class="p-0">
        <el-row class="bg-blue-500">
          <el-col :span="12" ><LogoAndTitle/></el-col>
          <el-col :span="12"><AppMenu/></el-col>
        </el-row>
        </el-header>
        <el-main class="p-0"><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script setup lang="ts">
import LogoAndTitle from './components/LogoAndTitle.vue'
import AppMenu from './components/AppMenu.vue'
</script>
