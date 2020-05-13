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
                | <a @click="deleteArticle(item.id)">删除</a>
            </li>
        </ul>
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
import { articleList, articleCreate, articleDelete } from '@/api/article'

// import store from '../../store/index'
// import store from '@/store'

function article() {
    const articles = ref(Array())
    // const form = ref(Object())
    const form = ref({title: '', content: ''})

    const getArticles = () => {
        articleList()
            .then((res: any) => {
                articles.value = res.data
            })
    }

    const deleteArticle = (id: Number|undefined) => {
        articleDelete(id)
            .then((res: any) => {
                getArticles()
                alert(`delete[${id}] success`)
                console.log('delete ok', res)
            })
            .catch((err: any) => {
                alert(`delete[${id}] failed`)
                console.log('delete err', err)
            })
    }
    const submit = () => {
        articleCreate(form.value)
            .then((res) => {
                getArticles()
                alert('create success ^_^')
                console.log('create ok', res)
            })
            .catch((err) => {
                alert('create failed @.@')
                console.log('create err', err)
            })
    }

    onMounted(() => {
        getArticles()
    })

    return {
        articles, form,
        submit, deleteArticle
    }
}

export default defineComponent({
    name: 'ArticleList',
    setup() {
        // article
        const {
            articles, form,
            submit, deleteArticle
            } = article()
        return {
            articles, form,
            submit, deleteArticle
        }
    },
    computed: {
    },
    methods: {
    }
})
</script>