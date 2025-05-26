<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import ContentView from '@/components/core/ContentView.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import { resourceCardsList, getTagById, tags } from '@/assets/data/ResourcesData.js';
import ResourceCardTag from '../ResourceCardTag.vue';

const route = useRoute()
const router = useRouter()

const unselectedTagIds = ref([])
const selectedTagIds = ref([])

const initUnselectedTags = () => {
    tags.value.forEach(tag => {
        unselectedTagIds.value.push(tag.id)
    });
}

const initTagsFromUrl = () => {
  const tagParam = route.query.tags
  if (tagParam) {
    selectedTagIds.value = tagParam.toString().split(',')
  }
}

initUnselectedTags()
initTagsFromUrl()

watch(selectedTagIds, (newTags) => 
{
  router.replace({
    query: {
      ...route.query,
      selectedTagIds: newTags.length > 0 ? newTags.join(',') : undefined,
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
  unselectedTagIds.value = unselectedTagIds.value.filter(id => id !== _id)
}
}

const removeTag = (_id) => {
    selectedTagIds.value = selectedTagIds.value.filter(id => id !== _id)
    unselectedTagIds.value.push(_id)
}

</script>

<template>
    <div>
        <ContentView>
            <div class="flex flex-col text-xl text-balance bg-gray-800 hover:bg-gray-900 rounded-2xl m-2 pt-3 px-3 border-gray-300 border-3 shadow-2xl shadow-gray-900">
                <h1 class="text-gray-200 text-xl">Filters</h1>
                <div class="mb-4 flex flex-wrap gap-2 min-h-8">
                    <label v-for="tagId in unselectedTagIds" :key="tagId" class="flex items-center space-x-2">
                    <button type="button" @click="addTag(tagId)">
                        <ResourceCardTag class="hover:outline-1 hover:outline-amber-200" :color="getTagById(tagId).color" :text="getTagById(tagId).text"></ResourceCardTag>
                    </button>
                    </label>
                </div>
                <div class="flex w-full h-0.5 bg-gray-300"></div>
                <h1 class="text-gray-200 text-xl">Selected Filters</h1>
                <div class="mb-4 flex flex-wrap gap-2 min-h-8">
                    <label v-for="tagId in selectedTagIds" :key="tagId" class="flex items-center space-x-2">
                    <button type="button" @click="removeTag(tagId)">
                        <ResourceCardTag class="hover:outline-1 hover:outline-amber-200" :color="getTagById(tagId).color" :text="getTagById(tagId).text"></ResourceCardTag>
                    </button>
                    </label>
                </div>
            </div>
            

            <div v-for="resourceCard in filteredItems">
                <ResourceCard :name="resourceCard.name" :link="resourceCard.link" :img="resourceCard.img" :desc="resourceCard.desc" :tagIds="resourceCard.tagIds"></ResourceCard>
            </div>
        </ContentView>
    </div>
</template>