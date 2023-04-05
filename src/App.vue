<script setup>
import { RouterView} from 'vue-router'
import IconCart from './components/icons/IconCart.vue';
import IconLogo from './components/icons/IconLogo.vue';
import IconMenu from './components/icons/IconMenu.vue';
import IconClose from './components/icons/IconClose.vue';
import { useCartStore } from './stores/cart';
import Cart from './components/Cart.vue';
import { Transition } from 'vue';

const cartStore = useCartStore();
</script>

<script>
export default {
    data() {
        return {
            mobileNav: false
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<template>
  <header class="flex items-center justify-between transition-all duration-500">
    <div class="flex items-center transition-all duration-500">
      <IconMenu class="m-3 transition-all duration-700 motion-reduce:transition-all" :class="{'rotate-180': mobileNav}" @click="toggleMobileNav" />
      <RouterLink :to="{name: 'home'}"><IconLogo /></RouterLink>
      <Transition name="mobile-nav">
        <div v-show="mobileNav" class="bg-white fixed top-0 left-0 h-full w-2/3 z-30">
          <IconClose class="m-5 absolute right-0 transition-all duration-700 motion-reduce:transition-all" @click="toggleMobileNav" :class="{ '-rotate-180': !mobileNav }" />
          <ul class="mx-5 my-10">
            <li class="my-5">
              <RouterLink :to="{name: 'collections'}" @click="mobileNav = false">Collections</RouterLink>
            </li>
            <li class="my-5">
              <button @click="mobileNav">Men</button>
            </li>
            <li class="my-5">
              <button @click="mobileNav">Women</button>
            </li>
            <li class="my-5">
              <button @click="mobileNav">About</button>
            </li>
            <li class="my-5">
              <button @click="mobileNav">Contact</button>
            </li>
            <li class="my-5">
              <button @click="mobileNav">Logon or Signup</button>
            </li>
          </ul>
        </div>
      </Transition>
      <Transition name="light-box">
        <div v-if="mobileNav" class="bg-black/70 fixed top-0 left-0 w-full h-full z-20" />
      </Transition>
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

<style>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 2s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.light-box-enter-from,
.light-box-leave-to {
  opacity: 0;
}

.light-box-enter-active,
.light-box-leave-active {
  transition: opacity 2s ease;
}
</style>