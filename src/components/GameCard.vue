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
  tags: {
    type: Object,
    required: false,
  },
})
import GameCardTag from './GameCardTag.vue';
import PlayMarketTag from './gameCardTags/PlayMarketTag.vue';
</script>

<template>
  <div class="w-full bg-gray-700 mb-0 rounded-b-3xl rounded-r-3xl border-1 border-gray-900 shadow-gray-900 shadow-2xl">
    <h1 class="mx-6 mb-1 mt-1 text-2xl font-medium text-gray-300">{{ name }}</h1>
    <a class="flex aspect-3/2 bg-auto bg-repeat-round flex-wrap items-end m-2 rounded-xl border-2 border-gray-900" :style="{ backgroundImage: `url(${img})` }" :href="link">
    </a>
    <div class="flex flex-row w-full pl-2 pb-2 pr-2 gap-2 flex-wrap m-0">
        <div v-for="tag in tags" class="m-0">
          <GameCardTag :link="tag.link" :img="tag.img"></GameCardTag>
        </div>
      </div>
  </div>
  
</template>