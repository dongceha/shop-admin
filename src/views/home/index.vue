<template>
  <h1>home {{$store.state.count}}</h1>
  <el-button type="primary">123</el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期">
  </el-date-picker>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { ref } from 'vue'

const value1 = ref()
const store = useStore()
console.log(store.state)
</script>
<style lang="scss" scoped>
h1 {
    color: $color;
}
</style>
