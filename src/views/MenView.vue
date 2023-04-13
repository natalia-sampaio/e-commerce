<script setup>
import ProductCard from '../components/ProductCard.vue';
import { getDiscountedPrice, getImages, getMensShoes } from '../services/products';
</script>

<script>
export default {
    data() {
        return {
            mensShoes: [],
            getDiscountedPrice
        };
    },
    async beforeMount() {
        this.mensShoes = await getMensShoes()
    }
}
</script>

<template>
    <div class="xl:mx-8 ">
        <!-- <div v-if="loading" class="text-center">
            Loading products...
        </div> -->
        <div class="flex flex-wrap justify-center">
            <ProductCard v-for="product in mensShoes" 
                :key="product.id" 
                :brandName="product.brand"
                :productName="product.title" 
                :finalCost="getDiscountedPrice(product.id, mensShoes)"
                :discount="product.discountPercentage" 
                :originalPrice="product.price" 
                :product="product"
                :images="getImages(product.id, mensShoes)" />
        </div>
    </div>
</template>