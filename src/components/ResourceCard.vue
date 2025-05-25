<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <a class="flex flex-col text-xl text-balance bg-gray-800 hover:bg-gray-900 rounded-2xl m-2 border-gray-200 border-3" :href="link">
    <h1 class="mt-1 text-2xl font-medium text-gray-300 border-b-2 border-gray-200 px-6 pb-1">{{ name }}</h1>
    <div class="flex flex-col items-center md:items-start md:flex-row w-full">
      <img class="flex w-full md:max-w-75 aspect-3/2 md:rounded-bl-xl border-gray-200 border-b-2 md:border-r-2" :src="img">
      <p class="flex w-full text-gray-300 overflow-auto text-balance text-clip text-xl p-3">
        {{ desc }}
      </p>
    </div>
  </a>
</template>