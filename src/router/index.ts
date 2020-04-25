import {
    createRouter, createWebHistory,
    RouterOptions, RouteRecordRaw,
} from 'vue-router'

import Home from '../views/home/index.vue'
import Test from '../views/test/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/test',
        component: Test
    }
]
const options: RouterOptions = {
    history: createWebHistory(process.env.BASE_URL),
    routes 
}

const router = createRouter(options)

export default router
