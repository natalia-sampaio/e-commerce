<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    mobileNav: null
})
</script>

<template>
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
        <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
            <button>Sign in</button>
        </li>
        <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark border border-blue-grayish hover:border-black rounded p-2">
            <RouterLink :to="{ name: 'sign-up' }" @click="mobileNav = false">Sign up</RouterLink>
        </li>
    </ul>
</template>