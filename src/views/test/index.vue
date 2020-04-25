<template>
    <div>
        <h1>Test</h1>
        <h1>name:{{name}}</h1>
        <h1>form.name:{{form.name}}</h1>
        <input v-model="form.name" @keyup="change2(form.name)"/>
        <label>change2</label>
        <input v-model="form.name" @input="change2(v1, v2)"/>
        <button @click="change2">click</button>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
// import store from '../../store/index'
// import store from '@/store'

function name() {
    const form = ref({name: ''})
    const changeName = (val: string) => {
        console.log(val)
        // form.value.name = val
        console.log(form)
        // const { ctx } = getCurrentInstance()
        // ctx.$store.c
    } 
    return { form, changeName, }
}
export default defineComponent({
    name: 'Test',
    setup() {
        const { form, changeName } = name()
        return {
            form, changeName
        }
    },
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        ...mapMutations(['setName']),
        change: (name: string) => {
            console.log('name', name)
            const ctx = getCurrentInstance()
            console.log('ctx', ctx)
        },
        change2: function (v1: any, v2: any) {
            console.log('change2:', v1, v2)
            console.log(this.form)
            console.log(this.form.name, this.form)
            console.log('state.name', this.name)
            this.setName(this.form.name)
            console.log('state.name', this.name)
            console.log(this)
            this.$
        }
    }
})
</script>