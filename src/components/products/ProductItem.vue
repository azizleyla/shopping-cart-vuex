<template>
    <div class="bg-white cursor-pointer shadow-md p-2 rounded-md  gap-5">
        <div class="min-h-[350px]">
            <img :src="imgThumb" class="w-64 h-64" />
            <h4 class="font-semibold">{{ title }}</h4>
            <p class="font-bold mt-2">{{ price.toFixed(2) }} ₼</p>
        </div>

        <button @click="handleClick(product)" class="bg-[#8DC63F] text-white w-full rounded-md p-1">Səbətə at</button>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue"
import store from "../../store";
const props = defineProps({
    product: {
        type: Object
    }
})

const { title, price, imgThumb } = toRefs(props.product)
const handleClick = (product) => {
    store.commit('addToCart', product)
}

</script>

<style lang="scss" scoped></style>