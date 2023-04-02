<script setup>
import Product from '../components/Product.vue';
import IconPlus from '../components/icons/IconPlus.vue';
import IconMinus from '../components/icons/IconMinus.vue';
import ItemsInput from '../components/ItemsInput.vue';
import IconCart from '../components/icons/IconCart.vue';
import { useProductsStore } from '../stores/products';

const productsStore = useProductsStore();

</script>

<template>
  <main>
    <Product 
      v-for="product in productsStore.products" 
      :key="product.id" 
      v-model:brandName="product.brand"
      v-model:productName="product.name"
      v-model:productDescription="product.description"
      v-model:finalCost="product.finalCost"
    >
      <template #discount v-if="product.discount > 0">
        <span class="bg-orange-pale text-orange-main rounded px-2 py-[0.1rem]">{{ product.discount }}%</span>
      </template>
      <template #cost v-if="product.discount > 0">${{ product.cost }}</template>
      <template #numberOfItems>
        <IconMinus @click="product.numberOfItems == 0 ? '' : product.numberOfItems--" />
        <ItemsInput v-model="product.numberOfItems" />
        <IconPlus @click="product.numberOfItems++" />
      </template>
      <template #addToCartButton>
        <button class="m-3 flex items-center justify-center text-white">
          <IconCart :fill="'#ffffff'" class="mr-4" />
          Add to cart
        </button>
      </template>
    </Product>
  </main>
</template>
