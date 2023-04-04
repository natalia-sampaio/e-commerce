<script setup>
import { useProductsStore } from '../stores/products';
import Banner from './Banner.vue';
import IconCart from './icons/IconCart.vue';

const productsStore = useProductsStore();

</script>

<template>
    <div class="bg-white mx-3 my-10 p-6 border-4 border-pink-600 shadow-customcard" v-for="product in productsStore.products">
        <div class="mb-6">
            <Banner />
        </div>
        <span class="text-orange-main text-sm uppercase">{{ product.brand }}</span>
        <h2 class="text-2xl capitalize">{{ product.title }}</h2>
        <div class="flex justify-between">
            <div>
                <span class="text-xl">${{ productsStore.getDiscountedPrice(product.id) }}</span>
                <span v-if="product.discountPercentage > 0" class="bg-orange-main text-orange-pale rounded px-2 py-[0.1rem] mx-4">{{ product.discountPercentage }}%</span>
            </div>
            <span v-if="product.discountPercentage > 0" class="text-blue-grayish line-through">${{ product.price }}</span>
        </div>
        <div class="mt-6 flex justify-center bg-orange-main rounded-lg">
            <button class="m-3 flex items-center justify-center text-white" @click.prevent="cartStore.addToCart(product)">
              <IconCart :fill="'#ffffff'" class="mr-4" />
              Add to cart
            </button>
        </div>
    </div>
</template>