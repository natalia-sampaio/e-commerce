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
    <input :type="type" :placeholder="placeholder" :aria-label="ariaLabel" class="border border-blue-grayish rounded-lg p-2 pl-4 text-base font-bold" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>