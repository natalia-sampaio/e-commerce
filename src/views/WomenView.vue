<script setup>
import { computed } from '@vue/reactivity';
import ProductCard from '../components/ProductCard.vue';
import SlideDownFade from '../components/SlideDownFade.vue';
import { useProductsStore } from '../stores/products';

const productsStore = useProductsStore();

const womensShoes = computed(() => {
    return productsStore.products.filter((product) => product.category === 'womens-shoes')
})
</script>

<template>
    <SlideDownFade>
        <div class="lg:mx-8 lg:flex lg:flex-wrap lg:justify-center">
            <div>
                <ProductCard v-for="product in womensShoes" :key="product.id" :brandName="product.brand"
                    :productName="product.title" :finalCost="productsStore.getDiscountedPrice(product.id)"
                    :discount="product.discountPercentage" :originalPrice="product.price" :product="product" />
            </div>
        </div>
    </SlideDownFade>
</template>