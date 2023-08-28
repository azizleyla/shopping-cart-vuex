<template>
    <div class="flex flex-row  gap-8 container mx-auto">
        <div class="flex flex-col  w-full">
            <div class="flex justify-between   items-center py-4 border-b-[1px] gap-4 border-[#ddd]" v-for="item of cart" :key="item.id">
<div class="flex items-center gap-4">
    <img class="w-20 h-20" :src="item.imgThumb" />
                <h4 class="font-semibold">{{ item.title }}</h4>
</div>
              
                <div class="flex gap-16 items-center">
                    <div class="flex items-center p-2 border-[1px] rounded-md justify-center text-center">
                     <button class="bg-transparent" @click="changeCount(item,'desc')">-</button>
                    <input  class="text-center bg-transparent appearance-none w-20 outline-none" v-model="item.count"  type="number"/>
                    <button @click="changeCount(item,'inc')" class="bg-transparent">+</button>
                    </div>
                
                    <p class="font-bold">{{ item.price.toFixed(2) }} ₼</p>
<div class="flex ml-auto">
    <button @click="handleDelete(item.id)">
        <i class="pi pi-trash"></i>
    </button>

</div>
                </div>
            </div>
         
        </div>
        <div class="bg-[#FAF6FC]  p-4 w-[300px]">
            <h3 class="font-bold">Sebetdeki mehsullar:{{ totalCountProducts }}</h3>
            <div class="flex justify-between  border-b-[0.5px] border-[#8bb4b6] p-1">
            <p>Toplam: </p>

                
         <span>       {{ totalPrice }} ₼</span>
        </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '../store';

const cart = computed(() => store.state.cart);
const totalCountProducts = computed(() => store.state.cart.length)
const totalPrice = computed(() => store.state.cart?.reduce((a, c) => a + c.price * c.count, 0))


const handleDelete = (id) => {
    store.commit('deleteProductFromCart', id)
}
const changeCount = (item,type) =>{
    if(type==='inc'){
        item.count++;
    }else{
        if(item.count===1){
            return;
        }
        item.count--
    }
    console.log(item)
   store.commit('updateCount',item)
}



</script>

<style lang="scss" scoped></style>