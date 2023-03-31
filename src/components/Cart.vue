<script setup>
import IconDelete from './icons/IconDelete.vue'
</script>

<template>
  <div class="bg-white rounded-lg m-3 absolute top-0 p-6 z-10">
    <div class="border-b border-blue-grayish">
      <span>Cart</span>
    </div>
    <div class="text-blue-dark-grayish font-normal">
      <img src="../assets/images/image-product-1-thumbnail.jpg" alt="" />
      <h2 >Fall limited edition sneakers</h2>
      <span>$125.00 </span><span>x 3 </span><span class="font-bold text-black">$375</span>
      <IconDelete />
    </div>
    <button class="p-3 flex items-center justify-center text-white bg-orange-main rounded-lg">
      Checkout
    </button>
  </div>
</template>
