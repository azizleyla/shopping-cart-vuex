<template>
    {{selectedProduct?.title}}
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import store from "../../store";
const products =  computed(() =>store.state.products);
const {id} = useRoute().params;
const selectedProduct = computed(() => products.value.find(item => item.id===Number(id)))

</script>