<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  components: {
    HelloWorld
  },
  setup(props) {

  }
})
</script>

<style>
</style>
