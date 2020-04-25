<template>
    <div>
        <h1>Home</h1>
        <button @click="inc">Clicked {{ count }} times.</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { test } from './test'
export default defineComponent({
    name: 'Home',
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