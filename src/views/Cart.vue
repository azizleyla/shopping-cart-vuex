<template>
    <div class="flex flex-row justify-between gap-8">
        <div class="flex flex-col w-full">
            <div class="flex  items-center py-4 border-b-[1px] gap-4 border-[#ddd]" v-for="item of cart" :key="item.id">

                <img class="w-20 h-20" :src="item.imgThumb" />
                <h4 class="font-semibold">{{ item.title }}</h4>
                <div class="flex gap-3 ml-auto">
                    <p class="font-bold">{{ item.price.toFixed(2) }} ₼</p>
                    <button @click="handleDelete(item.id)">Delete</button>
                </div>
            </div>
        </div>
        <div class="bg-[#FAF6FC]  p-4 w-[300px]">
            <h3 class="font-bold">Sebetdeki mehsullar:{{ totalCountProducts }}</h3>
            <p>Toplam: {{ totalPrice.toFixed(2) }} ₼</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';

const cart = computed(() => store.state.cart);
const totalCountProducts = computed(() => store.state.cart.length)
const totalPrice = computed(() => store.state.cart?.reduce((a, c) => a + c.price, 0))

const handleDelete = (id) => {
    store.commit('deleteProductFromCart', id)
}

</script>

<style lang="scss" scoped></style>