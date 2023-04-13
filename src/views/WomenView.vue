<script setup>
import ProductCard from '../components/ProductCard.vue';
import SlideDownFade from '../components/SlideDownFade.vue';
import { getDiscountedPrice, getImages, getWomensShoes } from '../services/products';

</script>

<script>
export default {
    data() {
        return {
            womensShoes: [],
            getDiscountedPrice: getDiscountedPrice
        };
    },
    async beforeMount() {
        this.womensShoes = await getWomensShoes();
    }
}
</script>

<template>
    <SlideDownFade>
        <div class="xl:mx-8">
            <!-- <div v-if="loading" class="text-center">
                Loading products...
            </div> -->
            <div class="xl:flex xl:flex-wrap xl:justify-center">
                <ProductCard v-for="product in womensShoes" 
                    :key="product.id" 
                    :brandName="product.brand"
                    :productName="product.title" 
                    :finalCost="getDiscountedPrice(product.id, womensShoes)"
                    :discount="product.discountPercentage" 
                    :originalPrice="product.price" 
                    :product="product"
                    :images="getImages(product.id, womensShoes)" />
            </div>
        </div>
    </SlideDownFade>
</template>