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
            activeThumbnail: 'opacity-70 border-2 border-orange-main',
            images: [
                {
                    big: 'src/assets/images/image-product-1.jpg',
                    thumb: 'src/assets/images/image-product-1-thumbnail.jpg'
                },
                {
                    big: 'src/assets/images/image-product-2.jpg',
                    thumb: 'src/assets/images/image-product-2-thumbnail.jpg'
                },
                {
                    big: 'src/assets/images/image-product-3.jpg',
                    thumb: 'src/assets/images/image-product-3-thumbnail.jpg'
                },
                {
                    big: 'src/assets/images/image-product-4.jpg',
                    thumb: 'src/assets/images/image-product-4-thumbnail.jpg'
                },
            ]
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
        },
        image(show) {
            return this.images[show].big
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
            <img class="lg:rounded-xl" :src="image(show)" alt="" />
        </Transition>
        <div v-if="desktop" class="flex justify-between mt-8">
            <div v-for="(image, index) in images" class="w-1/5">
                <img :src="image.thumb" alt="" @click="show = index" class="rounded-xl hover:cursor-pointer"/>
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
