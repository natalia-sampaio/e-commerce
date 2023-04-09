<script setup>
import ProductCard from '../components/ProductCard.vue';
import SlideDownFade from '../components/SlideDownFade.vue';
import { getDiscountedPrice, getWomensShoes } from '../services/products';

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
        <div class="lg:mx-8">
            <!-- <div v-if="loading" class="text-center">
                Loading products...
            </div> -->
            <div class="lg:flex lg:flex-wrap lg:justify-center">
                <ProductCard v-for="product in womensShoes" 
                    :key="product.id" 
                    :brandName="product.brand"
                    :productName="product.title" 
                    :finalCost="getDiscountedPrice(product.id, womensShoes)"
                    :discount="product.discountPercentage" 
                    :originalPrice="product.price" 
                    :product="product" />
            </div>
        </div>
    </SlideDownFade>
</template>