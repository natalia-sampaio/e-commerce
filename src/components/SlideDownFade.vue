<script>
import { Transition } from 'vue';
</script>

<template>
    <Transition name="slide-down-fade" appear>
        <slot></slot>
    </Transition>
</template>

<style>
.slide-down-fade-enter-from {
    opacity: 0;
    transform: translateY(-250px);
}

.slide-down-fade-enter-active {
    transition: all 2s ease;
}
</style>