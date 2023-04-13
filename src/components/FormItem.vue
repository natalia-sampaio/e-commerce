<template>
    <label class="font-normal text-sm grid mb-2">
      <div class="flex justify-between">
        <h3><slot name="label"></slot></h3>
        <span class="text-red-600"><slot name="error"></slot></span>
      </div>
      <slot></slot>
    </label>
</template>
