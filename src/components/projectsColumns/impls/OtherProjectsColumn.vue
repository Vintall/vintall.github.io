<script setup>
import ProjectsColumn from '@/components/projectsColumns/ProjectsColumn.vue'
import GameCard from '@/components/GameCard.vue';
import LenticularPrintPreview from '@/assets/media/projects/LenticularPrint.gif'
import RGBPreview from '@/assets/media/projects/rgbPrint2.webm'
import ReflectivePreview from '@/assets/media/projects/reflectiveStrip1.webm'
import RefractionShaderPreview from '@/assets/media/projects/refractionShader.webm'
import Preview from '@/assets/media/preview.png'
import { ref } from 'vue';

const projectsCards = ref([
    { 
        img: LenticularPrintPreview, 
        name: "Lenticular Print",
        description: "Lenticular Print HLSL shader (URP). SRP Batcher compatible. Input: Array of N images. Mapping image index to a tangent space depending on view angle. Image seems is blended with neighbours. Can be used for a holographic effect for access cards."
    },
    {  
        img: RGBPreview, 
        name: "RGB Shader",
        description: "RBG screen shader. Mapping channels using mask shift. CGShader"
    },
    {  
        img: ReflectivePreview, 
        name: "Reflective Material",
        description: "Rewriting surface normal to point at camera. Can be used in road signs and visibility vests. ShaderGraph"
    },
    {  
        img: RefractionShaderPreview, 
        name: "Refraction Shader",
        description: "URP, HLSL. Fetching color buffer and shifting fragment's ScreenSpace coordinate based on surface normal map. Lit by LambertLighting."
    },
    { 
        link: "https://github.com/Vintall/Unity-Free-Online-Config", 
        img: 'https://github.com/Vintall/Unity-Free-Online-Config/blob/media/Media/Guideline/Compressed/05.png?raw=true', 
        name: "VUFOC",
        description: "Unity package for free external configs. Based of Google Spreadsheets 'Publish To Web' feature. Simple config code generation."
    },
    {  
        img: Preview, 
        name: "This page",
        description: "Build with Vue.js and Tailwind for styling."
    },
])

</script>

<template>
    <ProjectsColumn column-name="Shader Showcase / Other Projects (6)">
        <div v-for="item in projectsCards">
            <GameCard :link="item.link" :img="item.img" :name="item.name">
                {{ item.description }}
            </GameCard>
        </div>
    </ProjectsColumn>
</template>