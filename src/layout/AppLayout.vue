<template>
<el-container>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px">
            <AppMenu></AppMenu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  .el-container {
    height: 100vh;
  }
</style>
