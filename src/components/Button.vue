<script setup>
defineProps({
    name: ""
})
</script>

<template>
    <button class="bg-orange-main text-white p-3 rounded-xl w-full">
        <slot name="icon"></slot>
        {{ name }}
    </button>
</template>