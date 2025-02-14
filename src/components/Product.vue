<script setup>
import { ref } from 'vue'
import Banner from '../components/Banner.vue'
import IconHeart from './icons/IconHeart.vue'

const numberOfItems = ref(0)

defineProps({
  brandName: '',
  productName: '',
  productDescription: '',
  finalCost: Number,
  cost: Number,
  images: Array
})
</script>

<template>
  <div class="xl:mx-8 xl:flex xl:items-center xl:justify-evenly">
    <Banner :images="images" class="xl:w-1/2" />
    <div class="xl:mx-20 xl:my-10 xl:grid xl:justify-center">
      <h2 class="text-sm text-orange-main uppercase m-6 xl:my-0">{{ brandName }}</h2>
      <div class="m-6">
        <h3 class="text-3xl xl:text-4xl capitalize my-4 xl:mt-0">{{ productName }}</h3>
        <p class="font-normal text-blue-dark-grayish">{{ productDescription }}</p>
      </div>
      <div class="m-6 xl:my-0 flex xl:grid items-center justify-between">
        <div>
          <span class="text-3xl mr-4">${{ finalCost }}</span>
          <slot name="discount"></slot>
        </div>
        <span class="line-through text-blue-grayish"><slot name="cost"></slot></span>
      </div>
      <!-- <div class="flex items-center justify-center m-6 h-12">
                <slot name="numberOfItems" :numberOfItems="numberOfItems"></slot>
            </div> -->
      <div class="flex items-center">
        <div class="m-6 flex justify-center bg-orange-main rounded-lg shadow-custom xl:w-2/3">
          <slot name="addToCartButton"></slot>
        </div>
        <slot name="addToFavoritesButton"></slot>
      </div>
    </div>
  </div>
</template>
