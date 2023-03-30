<script setup>
import Banner from '../components/Banner.vue';
import IconCart from '../components/icons/IconCart.vue';
import IconPlus from '../components/icons/IconPlus.vue';
import IconMinus from '../components/icons/IconMinus.vue';


</script>

<template>
  <main>
    <Banner />
    <div class="m-6">
      <h2 class="text-sm text-orange-main uppercase">Sneaker company</h2>
      <h3 class="text-3xl capitalize my-4">Fall limited edition sneakers</h3>
      <p class="font-normal text-blue-dark-grayish">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
    </div>
    <div class="m-6 flex items-center justify-between">
      <div>
        <span class="text-3xl mr-4">$125.00</span>
        <span class="bg-orange-pale text-orange-main rounded px-2 py-[0.1rem]">50%</span>
      </div>
      <span class="line-through text-blue-grayish">$250.00</span>
    </div>
    <div class="m-6 flex items-center justify-center bg-blue-light-grayish rounded-lg">
      <IconMinus />
      <input type="number" class="[-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none m-3 bg-blue-light-grayish text-center text-black placeholder:text-black" value="0" aria-label="number of items">
      <IconPlus />
    </div>
    <div class="m-6 flex justify-center bg-orange-main rounded-lg shadow-2xl">
      <button class="m-3 flex items-center justify-center text-white">
        <IconCart :fill="'#ffffff'" class="mr-4" />
        Add to cart
      </button>
    </div>
  </main>
</template>
