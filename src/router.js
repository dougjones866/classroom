import {
    createWebHistory,
    createRouter
} from "vue-router";

const Home= () => import('./views/Home.vue')
const Days = () => import('./components/Days.vue')
const Months = () => import('./components/Months.vue')
const Weather = () => import('./components/Weather.vue')
const Rps = () => import('./components/Rps.vue')
// const About = () => import('./components/About.vue')
// const Contact = () => import('./views/Contact.vue')




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, alias: '/classroom'
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/days",
            component: Days,
        },
        {
            path: "/months",
            component: Months,
        },
        {
            path: "/weather",
            component: Weather,
        },
        {
            path: "/rps",
            component: Rps,
        }
        // {
        //     path: "/about",
        //     component: About,
        // },
        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound
        // }
    ]

})

export default router;