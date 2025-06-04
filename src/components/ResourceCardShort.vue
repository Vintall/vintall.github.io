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
  <a class="flex flex-col flex-wrap text-xl text-gray-200 text-balance bg-gray-800 hover:bg-gray-900 rounded-2xl m-2 p-2 gap-2 border-gray-300 border-3 shadow-2xl shadow-gray-900" :href="link">
    <p class="w-full text-wrap">
      <span class="text-2xl font-extrabold">{{ name }} - </span> 
      {{ desc }}
    </p>
    <div class="flex flex-row flex-wrap w-full gap-1">
      <div v-for="tagId in tagIds">
        <ResourceCardTag :color="getTagById(tagId).color" :text="getTagById(tagId).text"></ResourceCardTag>
      </div>
    </div>
  </a>
</template>