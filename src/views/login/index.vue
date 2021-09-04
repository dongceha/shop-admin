<template>
 <div>
   <h1>登陆</h1>
   <el-form ref="form"></el-form>
   <input type="text" :value="user.username">
 </div>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref, reactive } from '@vue/runtime-core'
import { ElForm } from 'element-plus'

const form = ref<InstanceType<typeof ElForm>>()

const user = reactive({
  username: '',
  password: '',
  code: ''
})

const list = ref<ILoginInfo['slide']>()

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res.logo_square)
    list.value = res.slide
  })
})

</script>
