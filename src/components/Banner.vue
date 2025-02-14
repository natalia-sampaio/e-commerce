<script setup>
import { ref } from 'vue'
import IconNext from './icons/IconNext.vue'
import IconPrevious from './icons/IconPrevious.vue'

const show = ref(0)

defineProps({
  images: Array
})
</script>

<script>
export default {
  data() {
    return {
      desktop: null
    }
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth >= 1024) {
        this.desktop = true
        return
      }
      this.desktop = false
    },
    image(show) {
      return this.images[show]
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  }
}
</script>

<template>
  <div class="relative 2xl:max-w-[500px]">
    <IconPrevious class="absolute m-3 top-1/3 lg:hidden" @click="show == 0 ? (show = 3) : show--" />
    <Transition name="carousel" mode="out-in">
      <img class="xl:rounded-xl mx-auto" :src="image(show)" :key="show" alt="product image" />
    </Transition>
    <div v-if="desktop" class="flex justify-between items-center mt-8">
      <div v-for="(image, index) in images" class="w-1/6" :key="image">
        <img
          :src="image"
          alt="product thumbnail"
          @click="show = index"
          class="rounded-xl hover:cursor-pointer xl:rounded-lg"
        />
      </div>
    </div>
    <IconNext
      class="absolute m-3 top-1/3 right-0 lg:hidden"
      @click="show == 3 ? (show = 0) : show++"
    />
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
  transition: all 0.5s ease-out;
}
</style>
