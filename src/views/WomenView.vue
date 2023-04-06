<script setup>
import ProductCard from '../components/ProductCard.vue';
import SlideDownFade from '../components/SlideDownFade.vue';
import { useProductsStore } from '../stores/products';

const productsStore = useProductsStore();

</script>

<template>
    <SlideDownFade>
        <div>
            <ProductCard v-for="product in productsStore.products" :key="product.id" :brandName="product.brand"
                :productName="product.title" :finalCost="productsStore.getDiscountedPrice(product.id)"
                :discount="product.discountPercentage" :originalPrice="product.price" :product="product" />
        </div>
    </SlideDownFade>
</template>