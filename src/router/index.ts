import {
    createRouter, createWebHistory,
    createWebHashHistory,
    RouterOptions, RouteRecordRaw,
} from 'vue-router'

import Home from '../views/home/index.vue'
import Test from '../views/test/index.vue'
import Article from '@/views/article/index.vue'
import ArticleList from '@/views/article/list.vue'
import ArticleDetail from '@/views/article/detail.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/test',
        component: Test
    },
    {
        path: '/article',
        component: Article,
        children: [
            {
                path: '',
                name: 'ArticleList',
                component: ArticleList
            },
            {
                path: 'detail/:id',
                name: 'ArticleDetail',
                component: ArticleDetail,
                props: true
            }
        ]
    }

]
const options: RouterOptions = {
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes 
}

const router = createRouter(options)

export default router
