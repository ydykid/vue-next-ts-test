<template>
    <div>
        <h1>Article Detail</h1>
        <h2>title: {{detail.title}}</h2>
        <div v-html="detail.content"></div>
    </div>
</template>
<script lang="ts">
import {
    ref, defineComponent, getCurrentInstance,
    onMounted
} from 'vue'
import { articleDetail } from '@/api/article'

// import store from '../../store/index'
// import store from '@/store'

function article(id: Number | undefined) {
    const detail = ref({})
    onMounted(() => {
        articleDetail(id) 
            .then((res) => {
                detail.value = res.data
            })
    })

    return {
       detail 
    }
}

export default defineComponent({
    name: 'ArticleDetail',
    props: {
        id: Number
    },
    setup(props) {
        // article
        const { detail } = article(props.id)
        return {
            detail
        }
    },
    computed: {
    },
    methods: {
    }
})
</script>