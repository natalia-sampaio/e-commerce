<script setup>
import IconDelete from './icons/IconDelete.vue'
</script>

<template>
  <div class="bg-white rounded-lg m-3 absolute top-0 z-10 shadow-2xl">
    <div class="border-b border-blue-grayish">
      <div class="p-6">
        <span>Cart</span>
      </div>
    </div>
    <div class="text-blue-dark-grayish font-normal m-6 flex items-center">
      <img src="../assets/images/image-product-1-thumbnail.jpg" alt="" class="rounded h-14"/>
      <div class="m-3">
        <h2 >Fall limited edition sneakers</h2>
        <span>$125.00 </span><span>x 3 </span><span class="font-bold text-black">$375</span>
      </div>
      <IconDelete />
    </div>
    <div class="m-6">
      <button class="p-3 text-center text-white bg-orange-main rounded-lg w-full">
        Checkout
      </button>
    </div>
  </div>
</template>
