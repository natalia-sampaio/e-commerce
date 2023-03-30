<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconCart from './components/icons/IconCart.vue';
import IconLogo from './components/icons/IconLogo.vue';
import IconMenu from './components/icons/IconMenu.vue';
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center">
      <label for="menu" class=" m-3">
        <input type="checkbox" id="menu" class="hidden">
        <IconMenu class="m-3" />
      </label>
      <IconLogo />
    </div>
    <div class="flex items-center">
      <IconCart :fill="'#69707D'" class="m-3" />
      <img src="./assets/images/image-avatar.png" alt="profile avatar" class="w-8 m-3">
    </div>
  </header>

  <RouterView />
</template>