<script setup>
defineProps({
  columnName: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div class="flex flex-col gap-1 h-auto bg-gray-800 p-3 rounded-3xl">
        <h2 class="text-start pl-2 text-2xl font-bold text-shadow-2xs text-shadow-gray-950 text-gray-300">{{ columnName }}</h2>
        <div class="flex flex-col flex-wrap">
          <slot></slot>
        </div>
    </div>
</template>