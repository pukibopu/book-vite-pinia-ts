<template>
    <el-row>
        <el-col :span="3" class="bg-blue-500">
             <img src="@/assets/logo.png" width="60" class="flex-auto bg-blue-500">
        </el-col>
         <el-col :span="21" class="flex-auto bg-blue-500"><span id="title" class="bg-blue-500">SSLS图书自助</span></el-col>
    </el-row>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>

*{color:#fff;
  background-color: #2e3759;
   font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
#title {
  font-weight: 600;
  font-size: 40px;
  font-family: '微软雅黑';
}
</style>
