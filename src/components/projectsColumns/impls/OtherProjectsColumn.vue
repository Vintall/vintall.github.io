<script setup>
import ProjectsColumn from '@/components/projectsColumns/ProjectsColumn.vue'
import GameCard from '@/components/GameCard.vue';
import { ref } from 'vue';
import BreakLine from '@/components/pages/BreakLine.vue';

const projectsCards = ref([
    { 
        link: "https://github.com/Vintall/Erosion", 
        img: "", 
        name: "Terrain Erosion",
        description: ""
    },
    { 
        link: "https://github.com/Vintall/RadarSystem", 
        img: "", 
        name: "Radar System",
        description: ""
    },
    { 
        link: "https://github.com/Vintall/PlanetGeneration", 
        img: "", 
        name: "Planet Generation",
        description: ""
    },
    { 
        link: "https://github.com/Vintall/EmittersArray", 
        img: "", 
        name: "Emitters Array",
        description: ""
    },
])
</script>

<template>
    <ProjectsColumn column-name="Other Projects">
        <div v-for="item in projectsCards">
            <GameCard :link="item.link" :img="item.img" :name="item.name">
                {{ description }}
            </GameCard>
        </div>
    </ProjectsColumn>
</template>