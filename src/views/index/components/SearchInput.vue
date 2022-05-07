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
   <el-button :icon="Search" />
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>
<style scoped lang="scss"></style>
