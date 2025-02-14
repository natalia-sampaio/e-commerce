<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { getDiscountedPrice, getImages, getMensShoes, getWomensShoes } from '../services/products'

defineProps({
  isLoggedIn: Boolean
})

const products = ref([])

products.value = [...(await getMensShoes()), ...(await getWomensShoes())]
</script>

<template>
  <div class="xl:mx-48">
    <div class="flex flex-wrap justify-center">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :brandName="product.brand"
        :productName="product.title"
        :finalCost="getDiscountedPrice(product.id, products)"
        :discount="product.discountPercentage"
        :originalPrice="product.price"
        :product="product"
        :images="getImages(product.id, products)"
        :isLoggedIn="isLoggedIn"
      />
    </div>
  </div>
</template>
