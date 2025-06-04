<script setup>
import ResourceCardTag from './ResourceCardTag.vue';
import { getTagById } from '@/assets/data/Resources/ResourcesData';
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
  },
  tagIds: {
    type: NodeList,
    required: false
  }
})
</script>

<template>
  <a class="flex flex-col text-xl text-balance bg-gray-800 hover:bg-gray-900 rounded-2xl m-2 border-gray-300 border-3 shadow-2xl shadow-gray-900" :href="link">
    <h1 class="mt-1 text-2xl font-extrabold text-gray-200 border-b-2 border-gray-200 px-6 pb-2">{{ name }}</h1>
    <div class="flex flex-col items-center md:items-start md:flex-row w-full">
      <img v-if="img" class="flex w-full md:max-w-75 md:self-stretch aspect-3/2 md:rounded-bl-xl border-gray-300 border-b-2 md:border-b-0 md:border-r-2" :src="img">
      <div class="flex flex-col flex-wrap w-full p-3 self-stretch gap-2">
        <p class="flex w-full text-gray-200 overflow-auto text-balance text-clip text-xl grow">{{ desc }}</p>
        <div class="flex flex-row-reverse flex-wrap w-full gap-1">
          <div v-for="tagId in tagIds">
            <ResourceCardTag :color="getTagById(tagId).color" :text="getTagById(tagId).text"></ResourceCardTag>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>