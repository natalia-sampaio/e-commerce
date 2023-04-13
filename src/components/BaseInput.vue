<script setup>
defineProps({
    placeholder: "",
    ariaLabel: "",
    type: "",
    modelValue: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <input :type="type" :placeholder="placeholder" :aria-label="ariaLabel" class="" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>