import Vue from 'vue'

import Layout from "@/views/Layout/index.vue"
import Home from "@/views/Home/index.vue"
import Search from "@/views/Search/index.vue"
import Play from "@/views/Play/index.vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = [
    {
        path:'/',
        redirect: '/layout',
    },
    {
        path:'/layout',
        component:Layout,
        children:[
            {
                path:'home',
                component:Home,
                meta:{
                    title: '首页',
                  }
            },
            {
                path:'search',
                component:Search,
                meta:{
                    title: '搜索',
                  }
            },
        ]
    },
    {
        path:'/play',
        component:Play,
    },
];

// export const router = new VueRouter({
//     routes,
// })
export default new VueRouter({routes: router})