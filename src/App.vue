<template>
  <view>
    <img src="./logo.png">
    <h1>Hello Vue 3!</h1>
    <button @click="inc">Clicked {{ count }} times.</button>
  </view>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { test } from './test'
export default defineComponent({
  setup() {
    // const count = ref(0)
    // const inc = () => {
    //   count.value++
    // }
    const { count, inc } = test({count: 3})

    return {
      count,
      inc
    }
  }
})
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
