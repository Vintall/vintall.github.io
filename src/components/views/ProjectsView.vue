<script setup>
import GameCard from '../GameCard.vue';
import ContentView from '../core/ContentView.vue';
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
            <div class="flex flex-wrap justify-center gap-5 max-w-full min-w-max">
                <CommercialProjects></CommercialProjects>
                <GameJamsColumn></GameJamsColumn>
            </div>
        </ContentView>
    </div>
</template>