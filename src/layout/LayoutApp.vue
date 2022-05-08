<template>
   <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12"><LogoAndTitle/></el-col>
          <el-col :span="12"><AppMenu/></el-col>
        </el-row>
        </el-header>
        <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-col {
  background-color: #2e3759;
}
.el-header{
  padding: 0;
  background-color:  #2e3759;
  color: #333;
}
.el-footer{
  padding: 0;
  background-color:  #fff;
  color: #333;
}
.el-main{
  padding: 0;
    background-color: #f2f5fb;
    color: #333;
}
.el-container {
    height: 100vh;
}
.el-aside {
    background-color:  #2e3759;
}

</style>
<script setup lang="ts">
import LogoAndTitle from './components/LogoAndTitle.vue'
import AppMenu from './components/AppMenu.vue'
</script>
