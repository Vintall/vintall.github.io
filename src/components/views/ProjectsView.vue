<script setup>
import ContentView from '../core/ContentView.vue';
import CommercialProjects from '@/components/projectsColumns/impls/CommercialProjects.vue';
import GameJamsColumn from '@/components/projectsColumns/impls/GameJamsColumn.vue';
import { ref } from 'vue';

const testTags = ref([
    { link: "http://vintall.github.io", img: "src/assets/media/SlapSlapping.gif" },
    { link: "http://vintall.github.io", img: "src/assets/media/SlapSlapping.gif" },
    ])





</script>

<template>
    <div>
        <ContentView>
            <div class="flex flex-wrap justify-center gap-5 max-w-full min-w-max">
                <CommercialProjects></CommercialProjects>
                <GameJamsColumn></GameJamsColumn>
            </div>
        </ContentView>
    </div>
</template>