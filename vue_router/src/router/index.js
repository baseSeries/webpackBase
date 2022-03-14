import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
// import Home from "../components/home.vue"
// import About from "../components/about.vue"

const routes = [
    { path: '/', redirect: "/home" },
    {
        // magic  魔法注释  路由懒加载
        name: "home",
        path: '/home',
        meta: {
            name: "home",
        },
        component: () => import(/*webpackChunkName:"home-chunk"*/"../components/home.vue"),
        children: [
            {
                path: '',
                redirect: '/home/message'
            },
            {
                path: 'message',
                component: () => import(/*webpackChunkName:"message-chunk"*/"../components/message.vue")
            }
        ]
    },
    {
        name: "about",
        path: '/about',
        meta: {
            name: "about",
        },
        component: () => import(/*webpackChunkName:"about-chunk"*/"../components/about.vue")
    },
    {
        name: "user",
        path: '/user:username',
        meta: {
            name: "about",
        },
        component: () => import(/*webpackChunkName:"about-chunk"*/"../components/user.vue")
    },
    {
        path: "/:pathMath(.*)*",
        component: () => import(/*webpackChunkName:"noPage"*/"../components/notPage.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router