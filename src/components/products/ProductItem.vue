<template>
    <div class="bg-white cursor-pointer shadow-md p-2 rounded-md  gap-5">
        <div class="min-h-[350px]">
            <img :src="imgThumb" class="w-64 h-64" />
            <router-link :to="`/products/${id}`">
                <h4 class="font-semibold hover:text-[red]">{{ title }}</h4>

            </router-link>
            <p class="font-bold mt-2">{{ price.toFixed(2) }} ₼</p>
        </div>

        <button @click="handleClick(product)" class="bg-[#8DC63F] text-white w-full rounded-md p-1">Səbətə at</button>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue"
import { toast } from 'vue3-toastify';

import store from "../../store";
const props = defineProps({
    product: {
        type: Object
    }
})


const { title, price, imgThumb,id } = toRefs(props.product)
const handleClick = (product) => {
    store.commit('addToCart', product)
    toast.success("Sebete elave olundu !", {
        autoClose: 1000,
      });
}

</script>

<style lang="scss" scoped></style>