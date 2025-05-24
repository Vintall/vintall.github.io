<script setup>
defineProps({
  columnName: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div class="flex flex-col min-w-max max-h-min gap-3 h-auto bg-gray-800 p-5 rounded-3xl">
        <h2 class="align-middle text-center text-3xl font-medium text-gray-300 text-shadow-2xs text-shadow-gray-600">{{ columnName }}</h2>
        <slot></slot>
    </div>
</template>