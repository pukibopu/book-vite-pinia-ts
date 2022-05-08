<template>
    <div class="common-layout">
      <el-container>
        <el-aside><CategoryMenu/></el-aside>
        <el-main>
            <el-row>
            <el-col><SearchInput/></el-col>
            <el-col><BookTable></BookTable></el-col>
          </el-row>
        </el-main>
      </el-container>

  </div>
</template>

<script setup lang="ts">
import BookTable from './components/BookTable.vue'
import SearchInput from './components/SearchInput.vue'
import CategoryMenu from './components/CategoryMenu.vue'

</script>
<style scoped lang="scss">
.common-layout {
  padding: 0px;
}
.el-col {
  margin-top: 50px;
}
.el-row {
  margin-bottom: 100px;
}
.el-aside {
  margin: 0;
  padding: 0;
  background-color:  #2e3759;
}
.el-container {
  height: 100vh;
}
</style>
