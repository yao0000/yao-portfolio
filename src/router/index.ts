import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("@/views/AboutView.vue")
    },
    {
        path: '/experiences',
        name: 'experiences',
        component: () => import("@/views/ExperiencesView.vue")
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import("@/views/ProjectView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
