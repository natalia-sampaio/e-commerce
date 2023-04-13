<script setup>
import { RouterLink, RouterView} from 'vue-router'
import IconCart from './components/icons/IconCart.vue';
import IconLogo from './components/icons/IconLogo.vue';
import IconMenu from './components/icons/IconMenu.vue';
import { useCartStore } from './stores/cart';
import Cart from './components/Cart.vue';
import { Transition } from 'vue';
import NavLinks from './components/NavLinks.vue';
import IconClose from './components/icons/IconClose.vue';
import SlideDownFade from './components/SlideDownFade.vue';

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
            if (this.windowWidth >= 1280) {
                this.desktop = true;
                return;
            }
            this.desktop = false;
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    }
}
</script>

<template>
  <header class="flex items-center justify-between transition-all duration-500 xl:mx-40 xl:mb-20 xl:border-b-2 xl:border-blue-light-grayish">
    <div class="flex items-center transition-all duration-500">
      <IconMenu class="m-3 transition-all duration-700 motion-reduce:transition-all xl:hidden" :class="{'rotate-180': mobileNav}" @click="toggleMobileNav" />
      <RouterLink :to="{name: 'home'}"><IconLogo /></RouterLink>
      <div v-if="desktop" class="w-full">
        <NavLinks />
      </div>
      <Transition name="mobile-nav">
        <div v-show="mobileNav" 
        class="
          bg-white 
          fixed xl:relative 
          top-0 left-0 
          h-full xl:h-auto 
          w-2/3 xl:w-full 
          z-30 xl:z-0 ">
          <IconClose class="m-5 absolute right-0 transition-all duration-700 motion-reduce:transition-all xl:hidden" @click="toggleMobileNav" :class="{ '-rotate-180': !mobileNav }" />
          <ul class="mx-5 my-10 xl:text-blue-dark-grayish xl:font-normal xl:flex xl:justify-evenly">
              <li class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'collections' }" @click="mobileNav = false">Collections</RouterLink>
              </li>
              <li class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'men' }" @click="mobileNav = false">Men</RouterLink>
              </li>
              <li class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'women' }" @click="mobileNav = false">Women</RouterLink>
              </li>
              <li class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'about' }" @click="mobileNav = false">About</RouterLink >
              </li>
              <li class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'contact' }" @click="mobileNav = false">Contact</RouterLink>
              </li>
              <li class="my-5 xl:ml-10 border-b border-blue-dark-grayish pb-5">
                  <button>Sign in</button>
              </li>
              <li class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'sign-up' }">Sign up</RouterLink>
              </li>
          </ul>
      </div>
      </Transition>
      <Transition name="light-box">
        <div v-if="mobileNav" class="bg-black/70 fixed top-0 left-0 w-full h-full z-20 xl:hidden" />
      </Transition>
    </div>
    <div class="flex items-center">
      <button class="relative">
        <span class="text-xs text-white rounded-3xl px-2 bg-orange-main absolute right-0 top-1">{{ cartStore.cartItems }}</span>
        <IconCart :fill="cartStore.toggleCart ? '#000000' : '#69707D'" class="m-3" @click="cartStore.toggleCart = !cartStore.toggleCart"/>
      </button>
      <img src="./assets/images/image-avatar.png" alt="profile avatar" class="w-8 m-3 xl:w-16 xl:ml-10">
    </div>
  </header>
  
  <Cart v-if="cartStore.toggleCart" />

  <SlideDownFade>
    <RouterView />
  </SlideDownFade>
</template>

<style>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 2s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-1024px);
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