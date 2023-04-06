<script setup>
import { RouterLink } from 'vue-router';
import SlideDownFade from '../components/SlideDownFade.vue';
</script>

<template>
    <SlideDownFade name="slide-down-fade" appear>
        <div class="bg-orange-pale w-screen h-screen text-center">
            <h1 class="text-3xl py-7">About Me</h1>
            <div class="bg-white m-3 rounded-2xl grid">
                <div class="m-4 h-80 overflow-hidden shadow-xl border-2 border-pink-600">
                    <img src="@/assets/images/profile-pic.jpeg" alt="creator profile picture"/>
                </div>
                <div class="grid mt-3 mb-6 mx-3 font-mono">
                    <h2 class="text-xl">Natália Sampaio Rosa e Silva Andrade</h2>
                    <h3 class="font-medium underline">Frontend Web Dev</h3>
                </div>
            </div>
            <div class="mx-4 font-mono text-center shadow-customcard border-2 border-pink-600">
                <p class="leading-8 bg-white p-3">
                    Stack: JavaScript, Vue.js 3, Tailwind CSS, PHP and Laravel.
                </p>
            </div>
            <div class="mx-4 mt-6 font-mono text-center bg-white shadow-customcard border-2 border-pink-600">
                <RouterLink :to="{name: 'contact'}">
                    <button class="w-full">Contact Me!</button>
                </RouterLink>
            </div>
        </div>
    </SlideDownFade>
</template>