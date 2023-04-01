<script setup>
defineProps({
    modelValue: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <input 
        type="number" 
        class="
            [-moz-appearance:_textfield] 
            first-letter:[&::-webkit-outer-spin-button]:m-0 
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:m-0 
            [&::-webkit-inner-spin-button]:appearance-none
            focus:outline-none
            bg-blue-light-grayish text-center text-black
            placeholder:text-black py-3
        " 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        aria-label="number of items to add to cart"
    >
</template>