import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
       
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guest: true } 
    },
];

const route =createRouter({
    history: createWebHistory(),
    routes
})

route.beforeEach((to, form, next) =>{
    const token = localStorage.getItem('token') == null;
    if (to.matched.some(record => record.meta.guest)) {
        if (!token) next({ name: 'dashboard' })
        else next()
    } 
    if (to.matched.some(record => record.meta.requiresAuth)) { 
        if (token) {
            next({ name: 'login' })
        } else {
            next()
        } 
    }else{
        next()  
    }  
})

export default route;