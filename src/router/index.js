import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "../layout/DefaultLayout.vue";
import Products from '../components/products/Products.vue'
import Cart from '../views/Cart.vue'

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: '/products',
                name: 'products',
                component: Products,
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