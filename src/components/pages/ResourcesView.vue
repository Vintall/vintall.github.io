<script setup>
import ContentView from '@/components/core/ContentView.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import ResourcesData from '@/assets/data/ResourcesData.js';
const resourcesData = ResourcesData();
</script>

<template>
    <div>
        <ContentView>
            <div v-for="resourceCard in resourcesData">
                <ResourceCard :name="resourceCard.name" :link="resourceCard.link" :img="resourceCard.img" :desc="resourceCard.desc"></ResourceCard>
            </div>
        </ContentView>
    </div>
</template>