<script setup>
import ProjectsColumn from '@/components/projectsColumns/ProjectsColumn.vue'
import GameCard from '@/components/GameCard.vue';
import TerrainErosionPreview from "@/assets/media/projects/erosion.png"
import RadarSystemPreview from "@/assets/media/projects/radarSystem.png"
import PlanetGenerationPreview from "@/assets/media/projects/planets.png"
import EmittersArrayPreview from "@/assets/media/projects/emittersArray.gif"
import { ref } from 'vue';

const projectsCards = ref([
    { 
        link: "https://github.com/Vintall/Erosion", 
        img: TerrainErosionPreview, 
        name: "Terrain Erosion",
        description: "Procedural terrain generation using layered Simplex Noise and total of 4 Hydroulic Erosion algorithms: Grid-CPU, Grid-GPU, Particle-CPU and my own Particle-GPU. This project was done for a Master's Diploma in Applied Math."
    },
    { 
        link: "https://github.com/Vintall/RadarSystem", 
        img: RadarSystemPreview, 
        name: "Radar System",
        description: "Radar System based on Emitters Array. Radar sends narrow beam, continually mapping sectors in front of it and detects reflections. After detecting target, space around it can be mapped more presisely."
    },
    { 
        link: "https://github.com/Vintall/PlanetGeneration", 
        img: PlanetGenerationPreview, 
        name: "Planet Generation",
        description: "Procedural Planets generation using layered Perlin Noise. Sphere is build using Cube-Sphere mesh topology. Surface is arranged in memory using quad-tree structure. This helps to upscale resolution near the player."
    },
    { 
        link: "https://github.com/Vintall/EmittersArray", 
        img: EmittersArrayPreview, 
        name: "Emitters Array",
        description: "Wave interference simulation up to 980 emitters. Demonstration of phased shift and directional antennas using an array of emitters. Entire system is simulated in fragment shader (CG)."
    },
])
</script>

<template>
    <ProjectsColumn column-name="Simulations (4)">
        <div v-for="item in projectsCards">
            <GameCard :link="item.link" :img="item.img" :name="item.name">
                {{ item.description }}
            </GameCard>
        </div>
    </ProjectsColumn>
</template>