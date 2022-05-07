<template>
    <div class="common-layout">
          <el-row>
            <el-col><SearchInput/></el-col>
            <el-col><BookTable></BookTable></el-col>
          </el-row>
  </div>
</template>

<script setup lang="ts">
import BookTable from './components/BookTable.vue'
import SearchInput from './components/SearchInput.vue'

</script>
<style scoped lang="scss">
.common-layout {
  padding: 10px;
}
.el-col {
  margin-top: 50px;
}
.el-row {
  margin-bottom: 100px;
}
</style>
