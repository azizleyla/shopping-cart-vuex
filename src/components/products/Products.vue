<template>
    <div class="container mx-auto mt-10">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <product-item v-for="product of products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import store from "../../store/index"
import ProductItem from '../../components/products/ProductItem.vue'
const products = store.state.products;


</script>

