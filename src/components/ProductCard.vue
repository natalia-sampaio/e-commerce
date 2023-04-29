<script setup>
import Banner from '@/components/Banner.vue';
import IconCart from '@/components/icons/IconCart.vue';
import { useCartStore } from '../stores/cart';
import IconHeart from './icons/IconHeart.vue';
import { useFavoritesStore } from '../stores/favorites';

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

defineProps({
    brandName: "",
    productName: "",
    finalCost: Number,
    discount: Number,
    originalPrice: Number ,
    product: Object,
    images: Array,
    isLoggedIn: Boolean
});
</script>

<template>
    <div class="bg-white mx-3 my-10 p-6 border-4 border-pink-600 shadow-customcard max-w-sm grid items-end">
        <div>
            <Banner :images="images" />
        </div>
        <div>
            <span class="text-orange-main text-sm uppercase">{{ brandName }}</span>
            <h2 class="text-2xl capitalize">{{ productName }}</h2>
            <div class="flex justify-between">
                <div>
                    <span class="text-xl">${{ finalCost }}</span>
                    <span class="bg-orange-main text-orange-pale rounded px-2 py-[0.1rem] mx-4" v-if="discount > 0">{{ discount }}%</span>
                </div>
                <span class="text-blue-grayish line-through" v-if="discount > 0">${{ originalPrice }}</span>
                <IconHeart v-if="isLoggedIn" stroke="#69707D" fill="none" class="w-8 h-8" @click.prevent="favoritesStore.addToFavorites(product)"/>
            </div>
            <div class="mt-6 flex justify-center bg-orange-main rounded-lg">
                <button class="m-3 flex items-center justify-center text-white" @click.prevent="cartStore.addToCart(product)">
                    <IconCart :fill="'#ffffff'" class="mr-4" />
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>