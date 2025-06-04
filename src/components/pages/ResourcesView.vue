<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import ContentView from '@/components/core/ContentView.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import ResourceCardShort from '@/components/ResourceCardShort.vue';
import { resourceCardsList, getTagById, tags } from '@/assets/data/Resources/ResourcesData.js';
import ResourceCardTag from '@/components/ResourceCardTag.vue';
import BreakLine from '@/components/pages/BreakLine.vue';

const route = useRoute()
const router = useRouter()

const selectedTagIds = ref([])

const initTagsFromUrl = () => {
  const tagParam = route.query.tags
  if (tagParam) {
    selectedTagIds.value = tagParam.toString().split(',')
  }
}

initTagsFromUrl()

watch(selectedTagIds, (newTags) => 
{
  router.replace({
    query: {
      ...route.query,
      tags: newTags.length > 0 ? newTags.join(',') : undefined,
    },
  })
}, { deep: true })

const filteredItems = computed(() => 
{
  if (selectedTagIds.value.length === 0) 
    return resourceCardsList.value

  return resourceCardsList.value.filter(item =>
    selectedTagIds.value.every(tag => item.tagIds.includes(tag))
  )
})

const addTag = (_id) => {
    if (!selectedTagIds.value.includes(_id)) {
  selectedTagIds.value.push(_id)
}
}

const removeTag = (_id) => {
    selectedTagIds.value = selectedTagIds.value.filter(id => id !== _id)
}

const isOn = ref(false)
</script>

<template>
    <div>
        <ContentView>
            <div class="flex flex-col text-balance bg-gray-800 rounded-2xl m-2 pt-3 px-3 border-gray-500 border-3 shadow-2xl shadow-gray-900 text-gray-300 text-xl mb-1">
              
              <div class="flex flex-row">
                <span class="h-9 mr-2">List Mode: </span>
                <button 
                  @click="isOn = !isOn" 
                  :class="['relative w-26 h-8 rounded-md transition-colors duration-100 bg-gray-700']" 
                  class="hover:outline-1 hover:outline-cyan-600">
                    <span 
                      :class="['absolute left-0 top-0 w-13 h-8 bg-gray-500 rounded-md shadow transform transition-transform duration-100',
                      isOn ? 'translate-x-13' : 'translate-x-0']">
                    </span>
                    <span class="absolute left-1 bottom-1 transition-transform duration-100" :class="[isOn ? 'text-gray-500' : 'text-cyan-300']">Slow</span>
                    <span class="absolute right-1 bottom-1 transition-transform duration-100" :class="[isOn ? 'text-cyan-300' : 'text-gray-500']">Ugly</span>
                </button>
              </div>
              
              <h1>Filters</h1>
              <div class="mb-4 flex flex-wrap gap-2 min-h-8">
                  <label v-for="tag in tags" :key="tag.id" class="flex items-center space-x-2">
                  <button type="button" @click="addTag(tag.id)">
                      <ResourceCardTag class="hover:outline-1 hover:outline-cyan-600" :color="tag.color" :text="tag.text"></ResourceCardTag>
                  </button>
                  </label>
              </div>
              <BreakLine></BreakLine>
              <h1>Selected Filters</h1>
              <div class="mb-4 flex flex-wrap gap-2 min-h-8">
                  <label v-for="tagId in selectedTagIds" :key="tagId" class="flex items-center space-x-2">
                  <button type="button" @click="removeTag(tagId)">
                      <ResourceCardTag class="hover:outline-1 hover:outline-cyan-600" :color="getTagById(tagId).color" :text="getTagById(tagId).text"></ResourceCardTag>
                  </button>
                  </label>
              </div>
            </div>
            
            <div v-if="!isOn" v-for="resourceCard in filteredItems">
                <ResourceCard :name="resourceCard.name" :link="resourceCard.link" :img="resourceCard.img" :desc="resourceCard.desc" :tagIds="resourceCard.tagIds"></ResourceCard>
            </div>
            <div v-if="isOn" v-for="resourceCard in filteredItems">
                <ResourceCardShort :name="resourceCard.name" :link="resourceCard.link" :img="resourceCard.img" :desc="resourceCard.desc" :tagIds="resourceCard.tagIds"></ResourceCardShort>
            </div>
        </ContentView>
    </div>
</template>