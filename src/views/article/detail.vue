<template>
    <div>
        <h1>Article Detail</h1>
        <h2>title: {{detail.title}}</h2>
        <div v-html="detail.content"></div>
        <form>
            <label>title</label>
            <input name="title" v-model="form.title"/>
            <label>content</label>
            <textarea name="content" v-model="form.content"/>
            <button type="button" @click="submit">提交</button>
        </form>
    </div>
</template>
<script lang="ts">
import {
    ref, defineComponent, getCurrentInstance,
    onMounted
} from 'vue'
import { articleDetail, articleUpdate } from '@/api/article'

// import store from '../../store/index'
// import store from '@/store'

function article(id: Number | undefined) {
    const detail = ref({})
    const form = ref({})
    const getDetail = () => {
        articleDetail(id) 
            .then((res) => {
                detail.value = res.data
                form.value = Object.assign({}, res.data)
            })
    }
    onMounted(() => {
        getDetail()
    })
    const submit = () => {
        articleUpdate(form.value)
            .then((res) => {
                getDetail()
                alert('upate success ^_^')
                console.log('update ok', res)
            })
            .catch((err) => {
                alert('update failed @.@')
                console.log('update err', err)
            })
    }

    return {
       detail, form,
       submit
    }
}

export default defineComponent({
    name: 'ArticleDetail',
    props: {
        id: Number
    },
    setup(props) {
        // article
        const { detail, form, submit } = article(props.id)
        return {
            detail, form,
            submit
        }
    },
    computed: {
    },
    methods: {
    }
})
</script>