<script setup>
import ProductCard from '../components/ProductCard.vue';
import { getDiscountedPrice, getImages, getMensShoes, getWomensShoes } from '../services/products';

defineProps({
    isLoggedIn: Boolean
})
</script>

<script>
export default {
    data() {
        return {
            products: [],
            getDiscountedPrice: getDiscountedPrice
        };
    },
    async beforeMount() {
        this.products.push(...await getMensShoes());
        this.products.push(...await getWomensShoes());
    }
}
</script>

<template>
    <div class="xl:mx-48">
        <div v-if="loading" class="text-center">
            Loading products...
        </div>
        <div class="flex flex-wrap justify-center" v-else>
            <ProductCard v-for="product in products"
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