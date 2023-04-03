<script setup>
import { RouterView, useRouter} from 'vue-router'
import IconCart from './components/icons/IconCart.vue';
import IconLogo from './components/icons/IconLogo.vue';
import IconMenu from './components/icons/IconMenu.vue';
import IconClose from './components/icons/IconClose.vue';
import { ref } from 'vue';
import { useCartStore } from './stores/cart';
import Cart from './components/Cart.vue';

let collapsed = ref(true);

const cartStore = useCartStore();

const router = useRouter();

const goToCollections = () => {
  collapsed = true;
  router.push('/collections');
}
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center">
      <IconMenu class="m-3" @click="collapsed = false" />
      <IconLogo />
      <div v-if="!collapsed">
        <div class="bg-white opacity-100 fixed top-0 left-0 h-full w-2/3 z-20">
          <IconClose class="m-5" @click="collapsed = true" />
          <ul class="mx-5 my-10">
            <li class="my-5">
              <button @click="goToCollections">Collections</button>
            </li>
            <li class="my-5">
              <button @click="collapsed = true">Men</button>
            </li>
            <li class="my-5">
              <button @click="collapsed = true">Women</button>
            </li>
            <li class="my-5">
              <button @click="collapsed = true">About</button>
            </li>
            <li class="my-5">
              <button @click="collapsed = true">Contact</button>
            </li>
            <li class="my-5">
              <button @click="collapsed = true">Logon or Signup</button>
            </li>
          </ul>
        </div>
        <div class="bg-black opacity-70 fixed top-0 right-0 h-full w-1/3 z-20"></div>
      </div>
    </div>
    <div class="flex items-center">
      <button class="relative">
        <span class="text-xs text-white rounded-3xl px-2 bg-orange-main absolute right-0 top-1">{{ cartStore.cartItems }}</span>
        <IconCart :fill="cartStore.toggleCart ? '#000000' : '#69707D'" class="m-3" @click="cartStore.toggleCart = !cartStore.toggleCart"/>
      </button>
      <img src="./assets/images/image-avatar.png" alt="profile avatar" class="w-8 m-3">
    </div>
  </header>
  
  <Cart v-if="cartStore.toggleCart" />

  <RouterView />
</template>