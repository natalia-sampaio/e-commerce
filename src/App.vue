<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router';
import IconCart from './components/icons/IconCart.vue';
import IconLogo from './components/icons/IconLogo.vue';
import IconMenu from './components/icons/IconMenu.vue';
import { useCartStore } from './stores/cart';
import Cart from './components/Cart.vue';
import Favorites from './components/Favorites.vue';
import { Transition } from 'vue';
import IconClose from './components/icons/IconClose.vue';
import SlideDownFade from './components/SlideDownFade.vue';
import { onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import IconHeart from './components/icons/IconHeart.vue';
import { useFavoritesStore } from './stores/favorites';
import IconProfilePicture from './components/icons/IconProfilePicture.vue';
import { useUserStore } from './stores/user';

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();
const userStore = useUserStore();

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      cartStore.isLoggedIn = true;
      favoritesStore.isLoggedIn = true;
      cartStore.uid = user.uid;
      favoritesStore.uid = user.uid;
      cartStore.getUserCart;
      favoritesStore.getUserFavorites;
    } else {
      cartStore.isLoggedIn = false;
      favoritesStore.isLoggedIn = false;
      cartStore.items = [];
      favoritesStore.items = [];
    }
  });
});

const router = useRouter();

const handleSignOut = () => {
  signOut(getAuth()).then(() => {
    router.push('/');
    location.reload();
  });
}
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
        <ul class="my-10 text-blue-dark-grayish font-normal flex justify-evenly">
          <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
              <RouterLink :to="{ name: 'collections' }" @click="mobileNav = false">Collections</RouterLink>
          </li>
          <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
              <RouterLink :to="{ name: 'men' }" @click="mobileNav = false">Men</RouterLink>
          </li>
          <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
              <RouterLink :to="{ name: 'women' }" @click="mobileNav = false">Women</RouterLink>
          </li>
          <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
              <RouterLink :to="{ name: 'about' }" @click="mobileNav = false">About</RouterLink >
          </li>
          <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
              <RouterLink :to="{ name: 'contact' }" @click="mobileNav = false">Contact</RouterLink>
          </li>
          <li v-if="!cartStore.isLoggedIn" class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
              <RouterLink :to="{ name: 'sign-in' }">Sign in</RouterLink>
          </li>
          <li v-if="!cartStore.isLoggedIn" class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark border border-blue-grayish hover:border-black rounded p-2">
              <RouterLink :to="{ name: 'sign-up' }" @click="mobileNav = false">Sign up</RouterLink>
          </li>
          <li v-if="cartStore.isLoggedIn" class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark border border-blue-grayish hover:border-black rounded p-2">
              <button @click="handleSignOut()">Sign out</button>
          </li>
      </ul>
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
          <IconClose class="m-5 absolute right-0 transition-all duration-700 motion-reduce:transition-all xl:hidden" @click="toggleMobileNav" :class="{ '-rotate-180': !mobileNav }" :fill="'#69707D'" />
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
              <li v-if="!cartStore.isLoggedIn" class="my-5 xl:ml-10 border-b border-blue-dark-grayish pb-5">
                  <RouterLink :to="{ name: 'sign-in' }">Sign in</RouterLink>
              </li>
              <li v-if="!cartStore.isLoggedIn" class="my-5 xl:ml-10">
                  <RouterLink :to="{ name: 'sign-up' }">Sign up</RouterLink>
              </li>
              <li v-if="cartStore.isLoggedIn" class="my-5 xl:ml-10 border-b border-blue-dark-grayish pb-5">
                <button @click="handleSignOut()">Sign out</button>
              </li>
          </ul>
      </div>
      </Transition>
      <Transition name="light-box">
        <div v-if="mobileNav" class="bg-black/70 fixed top-0 left-0 w-full h-full z-20 xl:hidden" />
      </Transition>
    </div>
    <div class="flex items-center">
      <IconHeart v-if="cartStore.isLoggedIn" fill="none" stroke="#69707D" class="w-6 h-6" @click="favoritesStore.toggleFavorites = !favoritesStore.toggleFavorites" />
      <button class="relative">
        <span class="text-xs text-white rounded-3xl px-2 bg-orange-main absolute right-0 top-1">{{ cartStore.cartItems }}</span>
        <IconCart :fill="cartStore.toggleCart ? '#000000' : '#69707D'" class="m-3" @click="cartStore.toggleCart = !cartStore.toggleCart"/>
      </button>
      <RouterLink :to="{ name: 'user-profile' }">
        <div class="w-8 h-8 m-3 xl:w-16 xl:h-16 xl:ml-10">
          <img v-if="userStore.profilePicture != ''" :src="userStore.profilePicture" alt="" class="w-8 h-8 xl:w-16 xl:h-16 rounded-full object-cover">
          <IconProfilePicture v-else-if="userStore.isLoggedIn" class="w-8 h-8 xl:w-16 xl:h-16"/>
        </div>
      </RouterLink>
    </div>
  </header>
  
  <Cart v-if="cartStore.toggleCart" />
  <Favorites v-if="favoritesStore.toggleFavorites" />

  <SlideDownFade>
    <RouterView :isLoggedIn="cartStore.isLoggedIn" />
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