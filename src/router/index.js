import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "../layout/DefaultLayout.vue";
import Products from '../components/products/Products.vue'
import ProductDetails from '../components/products/ProductDetails.vue'

import Cart from '../views/Cart.vue'

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'products',
                component: Products,
            },
            {
                path: '/products/:id',
                component: ProductDetails,
            },
            {
                path: '/cart',
                component: Cart,
                name: 'cart'
            },
            {
                path: '/about'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;