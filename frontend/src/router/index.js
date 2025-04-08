import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import HomePage from "@/views/HomePage.vue";

// Add your other components as needed

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
