import { createWebHistory, createRouter } from 'vue-router'
import Products from '@/views/Products'
import Login from '@/views/login'
import SingleProduct from '@/views/SingleProduct'
import CheckOut from '@/views/CheckOut'


const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products
    },
    {
        path: '/Single-product',
        name: 'SingleProduct',
        component: SingleProduct
    },
    {
        path: '/Check-out',
        name: 'CheckOut',
        component: CheckOut
    }
]

export const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
})