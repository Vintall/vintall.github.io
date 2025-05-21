<script setup>
import GameCard from '../GameCard.vue';
import ContentView from '../ContentView.vue';
import { ref } from 'vue';

const testTags = ref([
    { link: "http://vintall.github.io", img: "src/assets/media/SlapSlapping.gif" },
    { link: "http://vintall.github.io", img: "src/assets/media/SlapSlapping.gif" },
    ])


import CommercialProjects from '../projectsColumns/CommercialProjects.vue';
import GameJamsColumn from '../projectsColumns/GameJamsColumn.vue';


</script>

<template>
    <div>
        <ContentView>
            <div class="flex flex-row justify-center gap-5 w-full">
                <div class="w-full">
                    <CommercialProjects></CommercialProjects>
                </div>
                <div class="w-full">
                    <GameJamsColumn></GameJamsColumn>
                </div>
            </div>
        </ContentView>
    </div>
</template>