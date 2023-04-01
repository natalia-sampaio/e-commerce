<script setup>
import Product from '../components/Product.vue';
import IconPlus from '../components/icons/IconPlus.vue';
import IconMinus from '../components/icons/IconMinus.vue';
import ItemsInput from '../components/ItemsInput.vue';
import IconCart from '../components/icons/IconCart.vue';
</script>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    images: [],
                    brand: "Sneaker company",
                    name: "Fall limited edition sneakers",
                    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                    cost: 250,
                    discount: 50,
                    finalCost: 125,
                    numberOfItems: 0
                },
                {
                    id: 2,
                    images: [],
                    brand: "Sneaker company",
                    name: "Fall limited edition sneakers",
                    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                    cost: 250,
                    discount: 0,
                    finalCost: 250,
                    numberOfItems: 0
                }
            ]
        };
    },
    components: { ItemsInput, IconCart }
}
</script>

<template>
  <main>
    <Product 
      v-for="product in products" 
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
