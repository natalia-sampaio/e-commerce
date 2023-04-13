<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
        <div class="bg-orange-pale w-screen h-screen text-center xl:flex xl:-mt-20">
            <h1 class="text-3xl py-7 text-orange-pale bg-orange-main xl:pl-48 xl:pr-24 xl:pt-12">About Me</h1>
            <div class="xl:mx-auto">
                <div class="bg-white m-3 rounded-2xl grid max-w-sm">
                    <div class="m-4 h-80 overflow-hidden shadow-xl border-2 border-pink-600">
                        <img src="@/assets/images/profile-pic.jpeg" alt="creator profile picture"/>
                    </div>
                    <div class="grid mt-3 mb-6 mx-3 font-mono max-w-sm">
                        <h2 class="text-xl">Natália Sampaio Rosa e Silva Andrade</h2>
                        <h3 class="font-medium underline">Frontend Web Dev</h3>
                    </div>
                </div>
                <div class="mx-4 font-mono text-center shadow-customcard border-2 border-pink-600 max-w-sm">
                    <p class="leading-8 bg-white p-3 h-full">
                        Stack: JavaScript, Vue.js 3, Tailwind CSS, PHP and Laravel.
                    </p>
                </div>
                <div class="mx-4 mt-6 font-mono text-center bg-white shadow-customcard border-2 border-pink-600 max-w-sm">
                    <RouterLink :to="{name: 'contact'}">
                        <button class="w-full">Contact Me!</button>
                    </RouterLink>
                </div>
            </div>
        </div>
</template>