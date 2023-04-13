<template>
    <label class="">
      <div class="">
        <h3><slot name="label"></slot></h3>
        <span class="text-red-600"><slot name="error"></slot></span>
      </div>
      <slot></slot>
    </label>
</template>
