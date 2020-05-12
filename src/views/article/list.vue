<template>
    <div>
        <h1>Article List</h1>
        <ul>
            <li v-for="(item, index) in articles" :key="index">
                <router-link :to="{name:'ArticleDetail', params:{id: item.id}}">
                    title:{{item.title}}
                </router-link>
                <!-- content:{{item.content}}
                <div v-html="item.content"></div> -->
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import {
    ref, defineComponent, getCurrentInstance,
    onMounted
} from 'vue'
import { articleList } from '@/api/article'

// import store from '../../store/index'
// import store from '@/store'

function article() {
    const articles = ref(Array())
    onMounted(() => {
        articleList()
            .then((res: any) => {
                articles.value = res.data
            })
    })

    return {
        articles
    }
}

export default defineComponent({
    name: 'ArticleList',
    setup() {
        // article
        const { articles } = article()
        return {
            articles
        }
    },
    computed: {
    },
    methods: {
    }
})
</script>