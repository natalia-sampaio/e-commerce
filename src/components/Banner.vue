<script setup>
import { Transition, ref } from 'vue';
import IconNext from './icons/IconNext.vue';
import IconPrevious from './icons/IconPrevious.vue';

const show = ref(0);
</script>

<script>
export default {
    data() {
        return {
            desktop: null,
            activeThumbnail: 'rounded-xl w-1/5 hover:cursor-pointer opacity-70 border-2 border-orange-main'
        };
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth >= 1024) {
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
    <div class="h-1/4 lg:h-auto relative lg:static">
        <IconPrevious class="absolute m-3 top-1/3 lg:hidden" @click="show == 0 ? show = 3 :show --" />
        <Transition name="carousel" mode="out-in">
            
            <img class="lg:rounded-xl" v-if="show == 0" src="../assets/images/image-product-1.jpg" alt="" />
            <img class="lg:rounded-xl" v-else-if="show == 1" src="../assets/images/image-product-2.jpg" alt="" />
            <img class="lg:rounded-xl" v-else-if="show == 2" src="../assets/images/image-product-3.jpg" alt="" />
            <img class="lg:rounded-xl" v-else src="../assets/images/image-product-4.jpg" alt="" />
        </Transition>
        <div v-if="desktop" class="flex justify-between mt-8">
            <img src="../assets/images/image-product-1-thumbnail.jpg" alt="" :class="show == 0 ? activeThumbnail : 'rounded-xl w-1/5 hover:cursor-pointer'" @click="show = 0" />
            <img src="../assets/images/image-product-2-thumbnail.jpg" alt="" :class="show == 1 ? activeThumbnail : 'rounded-xl w-1/5 hover:cursor-pointer'" @click="show = 1" />
            <img src="../assets/images/image-product-3-thumbnail.jpg" alt="" :class="show == 2 ? activeThumbnail : 'rounded-xl w-1/5 hover:cursor-pointer'" @click="show = 2" />
            <img src="../assets/images/image-product-4-thumbnail.jpg" alt="" :class="show == 3 ? activeThumbnail : 'rounded-xl w-1/5 hover:cursor-pointer'" @click="show = 3" />
        </div>
        </div>
        <IconNext class="absolute m-3 top-1/3 right-0 lg:hidden" @click="show == 3 ? show = 0 : show ++" />
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
