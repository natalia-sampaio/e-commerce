<script setup>
import Banner from '../components/Banner.vue';

defineProps({
    brandName: "",
    productName: "",
    productDescription: "",
    finalCost: Number,
    cost: Number
})
</script>

<template>
    <div>
        <Banner />
        <h2 class="text-sm text-orange-main uppercase m-6">{{ brandName }}</h2>
        <div class="m-6">
            <h3 class="text-3xl capitalize my-4">{{ productName }}</h3>
            <p class="font-normal text-blue-dark-grayish">{{ productDescription }}</p>
        </div>
        <div class="m-6 flex items-center justify-between">
            <div>
                <span class="text-3xl mr-4">${{ finalCost }}</span>
                <slot name="discount"></slot>
                
            </div>
            <span class="line-through text-blue-grayish"><slot name="cost"></slot></span>
        </div>
        <div class="flex items-center justify-center m-6 h-12">
            <slot name="numberOfItems"></slot>
        </div>
        <div class="m-6 mb-16 flex justify-center bg-orange-main rounded-lg shadow-custom">
            <slot name="addToCartButton"></slot>
        </div>
    </div>
</template>