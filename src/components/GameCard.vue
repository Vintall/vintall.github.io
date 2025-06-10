<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  tags: {
    type: Object,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
})
import GameCardTag from '@/components/GameCardTag.vue'
</script>

<template>
  <a class="flex overflow-clip flex-col text-xl text-balance bg-gray-800 rounded-2xl m-2 border-gray-300 border-3 shadow-2xl shadow-gray-900" 
    :class="[link ? 'hover:bg-gray-900' : '']" :href="link">
    <h1 class="mt-1 text-2xl font-extrabold text-gray-200 border-b-2 border-gray-200 px-6 pb-2">{{ name }}</h1>
    <div class="flex flex-col md:flex-row items-center md:items-start w-full">
      <video v-if="img.endsWith('.webm')" class="flex w-full md:max-w-75 md:h-50 md:rounded-bl-xl border-gray-300 border-b-2 md:border-b-0 md:border-r-2" :src="img" :autoplay="true" :loop="true"></video>
      <img v-if="!img.endsWith('.webm')" class="flex w-full md:max-w-75 md:h-50 md:rounded-bl-xl border-gray-300 border-b-2 md:border-b-0 md:border-r-2" :src="img">
      <div class="flex flex-col flex-wrap w-full p-3 self-stretch gap-2">
        <p class="flex w-full text-gray-200 overflow-auto text-wrap text-clip text-xl grow flex-col">{{ desc }}
          <slot></slot>
        </p>
        <div class="flex flex-row-reverse flex-wrap w-full gap-1">
          <div v-for="tag in tags">
            <GameCardTag :link="tag.link" :img="tag.img"></GameCardTag>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>