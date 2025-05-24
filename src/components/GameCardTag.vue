<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a class="flex h-10 w-10 bg-repeat-round rounded-2xl border-gray-700 border-2 shadow shadow-gray-900 hover:border-4 hover:border-gray-600" :href="link" :style="{ backgroundImage: `url(${img})` }"></a>
</template>