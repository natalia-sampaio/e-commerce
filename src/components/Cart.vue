<script setup>
import { useCartStore } from '../stores/cart';
import { useProductsStore } from '../stores/products';
import IconDelete from './icons/IconDelete.vue';

const cartStore = useCartStore();

const productsStore = useProductsStore();
</script>

<template>
  <div class="bg-white rounded-lg m-2 absolute top-14 right-0 left-0 z-10 min-h-[30%] shadow-2xl">
    <div class="border-b border-blue-grayish">
      <div class="p-6">
        <span>Cart</span>
      </div>
    </div>
    <div v-if="cartStore.cartItems > 0">
      <div class="text-blue-dark-grayish font-normal m-6 flex items-center" v-for="item in cartStore.items" :key="item.product.id">
        <img src="../assets/images/image-product-1-thumbnail.jpg" alt="" class="rounded h-14"/>
        <div class="m-3">
          <h2 class="capitalize">{{ item.product.title }}</h2>
          <span >${{ productsStore.getDiscountedPrice(item.product.id) }} </span><span> x {{ item.amount }} </span><span class="font-bold text-black"> ${{ productsStore.getDiscountedPrice(item.product.id) * item.amount }}</span>
        </div>
        <IconDelete />
      </div>
      <div class="m-6">
        <button class="p-3 text-center text-white bg-orange-main rounded-lg w-full">
          Checkout
        </button>
      </div>
    </div>
    <div v-else class="text-blue-dark-grayish text-center pt-16">
      <span>Your cart is empty.</span>
    </div>
  </div>
</template>
