<script setup>
import { ref } from 'vue';
import Banner from '../components/Banner.vue';

const numberOfItems = ref(0)

defineProps({
    brandName: "",
    productName: "",
    productDescription: "",
    finalCost: Number,
    cost: Number,
    images: Array
})
</script>

<template>
    <div class="lg:mx-8 lg:flex lg:items-center">
        <Banner :images="images" class="lg:w-1/3" />
        <div class="lg:mx-20 lg:my-10 lg:grid lg:justify-center">
            <h2 class="text-sm text-orange-main uppercase m-6 lg:my-0">{{ brandName }}</h2>
            <div class="m-6">
                <h3 class="text-3xl lg:text-4xl capitalize my-4 lg:mt-0">{{ productName }}</h3>
                <p class="font-normal text-blue-dark-grayish">{{ productDescription }}</p>
            </div>
            <div class="m-6 lg:my-0 flex lg:grid items-center justify-between">
                <div>
                    <span class="text-3xl mr-4">${{ finalCost }}</span>
                    <slot name="discount"></slot>
                    
                </div>
                <span class="line-through text-blue-grayish"><slot name="cost"></slot></span>
            </div>
            <!-- <div class="flex items-center justify-center m-6 h-12">
                <slot name="numberOfItems" :numberOfItems="numberOfItems"></slot>
            </div> -->
            <div class="m-6 mb-16 lg:mb-0 flex justify-center bg-orange-main rounded-lg shadow-custom lg:w-2/3">
                <slot name="addToCartButton"></slot>
            </div>
        </div>
        
    </div>
</template>