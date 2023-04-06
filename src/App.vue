<script setup>
import { RouterLink, RouterView} from 'vue-router'
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
            mobileNav: null,
            windowWidth: null,
            desktop: null
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
          this.windowWidth = window.innerWidth;
          if(this.windowWidth>= 1024) {
            this.desktop = true;
            return
          }
          this.desktop = false;
        }
    },
    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    }
}
</script>

<template>
  <header class="flex items-center justify-between transition-all duration-500 lg:mx-40 lg:mb-20 lg:border-b-2 lg:border-blue-light-grayish">
    <div class="flex items-center transition-all duration-500">
      <IconMenu class="m-3 transition-all duration-700 motion-reduce:transition-all lg:hidden" :class="{'rotate-180': mobileNav}" @click="toggleMobileNav" />
      <RouterLink :to="{name: 'home'}"><IconLogo /></RouterLink>
      <div v-if="desktop" class="w-full">
        <ul class="mx-5 my-10 text-blue-dark-grayish font-normal flex justify-evenly">
          <li class="my-5 ml-10 hover:font-bold hover:text-blue-very-dark">
            <RouterLink :to="{ name: 'collections' }">Collections</RouterLink>
          </li>
          <li class="my-5 ml-10 hover:font-bold hover:text-blue-very-dark">
            <RouterLink :to="{ name: 'men' }">Men</RouterLink>
          </li>
          <li class="my-5 ml-10 hover:font-bold hover:text-blue-very-dark">
            <RouterLink :to="{ name: 'women' }">Women</RouterLink>
          </li>
          <li class="my-5 ml-10 hover:font-bold hover:text-blue-very-dark">
            <RouterLink :to="{ name: 'about' }">About</RouterLink >
            </li>
            <li class="my-5 ml-10 hover:font-bold hover:text-blue-very-dark">
              <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
            </li>
            <li class="my-5 ml-10 hover:font-bold hover:text-blue-very-dark">
              <button>Logon or Signup</button>
            </li>
          </ul>
        </div>
      <Transition name="mobile-nav">
        <div v-show="mobileNav" class="
          bg-white 
          fixed lg:relative 
          top-0 left-0 
          h-full lg:h-auto 
          w-2/3 lg:w-full 
          z-30 lg:z-0 ">
          <IconClose class="m-5 absolute right-0 transition-all duration-700 motion-reduce:transition-all lg:hidden" @click="toggleMobileNav" :class="{ '-rotate-180': !mobileNav }" />
          <ul class="mx-5 my-10 lg:text-blue-dark-grayish lg:font-normal lg:flex lg:justify-evenly">
            <li class="my-5 lg:ml-10">
              <RouterLink :to="{name: 'collections'}" @click="mobileNav = false">Collections</RouterLink>
            </li>
            <li class="my-5 lg:ml-10">
              <RouterLink :to="{name: 'men'}" @click="mobileNav = false">Men</RouterLink>
            </li>
            <li class="my-5 lg:ml-10">
              <RouterLink :to="{name: 'women'}" @click="mobileNav = false">Women</RouterLink>
            </li>
            <li class="my-5 lg:ml-10">
              <RouterLink :to="{name: 'about'}" @click="mobileNav = false">About</RouterLink >
            </li>
            <li class="my-5 lg:ml-10">
              <RouterLink :to="{name: 'contact'}" @click="mobileNav = false">Contact</RouterLink>
            </li>
            <li class="my-5 lg:ml-10">
              <button>Logon or Signup</button>
            </li>
          </ul>
        </div>
      </Transition>
      <Transition name="light-box">
        <div v-if="mobileNav" class="bg-black/70 fixed top-0 left-0 w-full h-full z-20 lg:hidden" />
      </Transition>
    </div>
    <div class="flex items-center">
      <button class="relative">
        <span class="text-xs text-white rounded-3xl px-2 bg-orange-main absolute right-0 top-1">{{ cartStore.cartItems }}</span>
        <IconCart :fill="cartStore.toggleCart ? '#000000' : '#69707D'" class="m-3" @click="cartStore.toggleCart = !cartStore.toggleCart"/>
      </button>
      <img src="./assets/images/image-avatar.png" alt="profile avatar" class="w-8 m-3 lg:w-16 lg:ml-10">
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