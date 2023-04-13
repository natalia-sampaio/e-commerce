<script setup>
import { RouterLink } from 'vue-router';
import IconClose from './icons/IconClose.vue';

defineProps({
    toggleMobileNav: null,
    mobileNav: null
});
</script>

<template>
    <div class="
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
</template>