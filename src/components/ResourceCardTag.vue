<script setup>
defineProps({
  color: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <a :class="color" class="flex text-white/70 font-bold text-2xs self-center h-min-7 w-min-3 px-1 pb-0.5 bg-repeat-round rounded-xl border-gray-700 border-2">
    {{ text }}
  </a>
</template>