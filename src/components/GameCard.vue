<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  img: {
    type: Image,
    required: true
  },
  tags: {
    type: NodeList,
    required: false
  },
})
</script>

<template>
    <div class="grid-cols-2 w-35 h-5 bg-amber-700 justify-center inline-flex gap-10">
      <span class="w-5 h-5 bg-amber-300">
        
      </span>
      <span class="w-5 h-5 bg-amber-300">

      </span>
    </div>
</template>