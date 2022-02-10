import { createRouter, createWebHashHistory } from 'vue-router'
import  Home from '../pages/Home.vue'
import  About from '../pages/About.vue'
import  Setuptest from '../pages/Setuptest.vue'
import Vtransition from '../pages/Vtransition.vue'
import Vanimation from '../pages/Vanimation.vue'
import TranGroup from '../pages/TranGroup.vue'
import WashDemo from '../pages/WashDemo.vue'

const routes = [
    {
        path: '/', //路由名称（'/'表示默认显示此页面）
        name: 'Home', // ？？
        component: Home // ？？
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Setuptest',
        name: 'Setuptest',
        component: Setuptest
    },
    {
        path: '/Vtransition',
        name: 'Vtransition',
        component: Vtransition
    },
    {
        path: '/Vanimation',
        name: 'Vanimation',
        component: Vanimation
    },
    {
        path: '/TranGroup',
        name: 'TranGroup',
        component: TranGroup
    },
    {
        path: '/WashDemo',
        name: 'WashDemo',
        component: WashDemo
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
console.log('router---index.js')

