import { createRouter, createWebHistory} from 'vue-router'
import AboutItem from '../views/AboutItem'
import HomeItem from '../views/HomeItem'

const routes = [
    {
        path: '/',
        name: 'HomeItem',
        component: HomeItem
    },
    {
        path: '/about',
        name: 'AboutItem',
        component: AboutItem
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router