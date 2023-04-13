<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="w-full">
        <ul class="my-10 text-blue-dark-grayish font-normal flex justify-evenly">
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
                <RouterLink :to="{ name: 'collections' }">Collections</RouterLink>
            </li>
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
                <RouterLink :to="{ name: 'men' }">Men</RouterLink>
            </li>
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
                <RouterLink :to="{ name: 'women' }">Women</RouterLink>
            </li>
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
                <RouterLink :to="{ name: 'about' }">About</RouterLink >
            </li>
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
                <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
            </li>
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark p-2">
                <button>Sign in</button>
            </li>
            <li class="my-5 ml-5 hover:font-bold hover:text-blue-very-dark border border-blue-grayish hover:border-black rounded p-2">
                <RouterLink :to="{ name: 'sign-up' }">Sign up</RouterLink>
            </li>
        </ul>
    </div>
</template>