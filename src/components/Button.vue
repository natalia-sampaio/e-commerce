<script setup>
defineProps({
    name: ""
})
</script>

<template>
    <button class="">
        <slot name="icon"></slot>
        {{ name }}
    </button>
</template>