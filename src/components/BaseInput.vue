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
    <input :type="type" :placeholder="placeholder" :aria-label="ariaLabel" class="border border-blue-grayish focus:outline-none focus:border-0 focus:ring-2 focus:ring-orange-main rounded-lg p-2 pl-4 text-base font-bold" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>