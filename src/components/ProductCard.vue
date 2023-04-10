<script setup>
import Banner from '@/components/Banner.vue';
import IconCart from '@/components/icons/IconCart.vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

defineProps({
    brandName: "",
    productName: "",
    finalCost: Number,
    discount: Number,
    originalPrice: Number ,
    product: Object,
    images: Array
});
</script>

<template>
    <div class="bg-white mx-3 my-10 p-6 border-4 border-pink-600 shadow-customcard max-w-sm">
        <div class="mb-6">
            <Banner :images="images" />
        </div>
        <span class="text-orange-main text-sm uppercase">{{ brandName }}</span>
        <h2 class="text-2xl capitalize">{{ productName }}</h2>
        <div class="flex justify-between">
            <div>
                <span class="text-xl">${{ finalCost }}</span>
                <span class="bg-orange-main text-orange-pale rounded px-2 py-[0.1rem] mx-4" v-if="discount > 0">{{ discount }}%</span>
            </div>
            <span class="text-blue-grayish line-through" v-if="discount > 0">${{ originalPrice }}</span>
        </div>
        <div class="mt-6 flex justify-center bg-orange-main rounded-lg">
            <button class="m-3 flex items-center justify-center text-white" @click.prevent="cartStore.addToCart(product)">
                <IconCart :fill="'#ffffff'" class="mr-4" />
                Add to cart
            </button>
        </div>
    </div>
</template>