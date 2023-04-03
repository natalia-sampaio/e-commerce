<script setup>
import { Transition, ref } from 'vue';
import IconNext from './icons/IconNext.vue';
import IconPrevious from './icons/IconPrevious.vue';
import Cart from './Cart.vue';
import { useCartStore } from '../stores/cart';

const show = ref(0);
</script>

<template>
    <div class="h-1/4 relative">
        <IconPrevious class="absolute m-3 top-1/3" @click="show == 0 ? show = 3 :show --" />
        <Transition name="carousel" mode="out-in">
            <img v-if="show == 0" src="../assets/images/image-product-1.jpg" alt=""/>
            <img v-else-if="show == 1" src="../assets/images/image-product-2.jpg" alt=""/>
            <img v-else-if="show == 2" src="../assets/images/image-product-3.jpg" alt=""/>
            <img v-else src="../assets/images/image-product-4.jpg" alt=""/>
        </Transition>
        <IconNext class="absolute m-3 top-1/3 right-0" @click="show == 3 ? show = 0 : show ++" />
    </div>

</template>

<style>
.carousel-enter-from,
.carousel-leave-to { 
    opacity: 0;
    transform: translateX(-200px);
}

.carousel-enter-active,
.carousel-leave-active {
    transition: all .5s ease-out
}
</style>
