<script setup>
import ProjectsColumn from '@/components/projectsColumns/ProjectsColumn.vue'
import GameCard from '@/components/GameCard.vue';
import { ref } from 'vue';
import BreakLine from '@/components/pages/BreakLine.vue';

const gameJamsCards = ref([
    { 
        link: "https://vintall.itch.io/money-no-money", 
        img: "https://img.itch.zone/aW1nLzIwMDQ4NjA5LnBuZw==/315x250%23c/DlpktT.png", 
        name: "Money problem? No problem 👌",
        description: "Place cards in one sequence to defeat gamble-bot. Don't let him screw the sequence",
        jamName: "Brackeys Game Jam 2025.1",
        jamTheme: "Nothing can go wrong...",
        startDate: "February 16th 2025",
        duration: "7 days",
    },
    { 
        link: "https://vintall.itch.io/andydouglas", 
        img: "https://img.itch.zone/aW1nLzE5MTg3ODM1LmdpZg==/original/kueQmM.gif", 
        name: "Andy&Douglas",
        description: "Switch your holy/demon form to avoid and traverce obstacles in a world, where every mistake is fatal",
        jamName: "Winter MelonJam 2024 ❄️🍈",
        jamTheme: "Polarity",
        startDate: "December 27th 2024",
        duration: "3 days",
    },
    { 
        link: "https://vintall.itch.io/deatomiser", 
        img: "https://img.itch.zone/aW1nLzE3NDcyOTY5LnBuZw==/315x250%23c/%2Fhf2gL.png", 
        name: "Deatomiser",
        description: "Build up you Atom element by element. Fight other atoms to become the biggest fish in the pool",
        jamName: "GMTK Game Jam 2024",
        jamTheme: "Build to scale",
        startDate: "August 16th 2024",
        duration: "4 days",
    },
    { 
        link: "https://vintall.itch.io/alcaists", 
        img: "https://img.itch.zone/aW1nLzE3MTUwNjc5LnBuZw==/315x250%23c/hMvU9U.png", 
        name: "Alcaists",
        description: "Scout abandoned side of the legendary Shadow Alchemists. Solve multiple puzzles to obtain 4 elements of Nature",
        jamName: "Pirate Software - Game Jam 15",
        jamTheme: "Shadows and Alchemy",
        startDate: "July 17th 2024",
        duration: "14 days",
    },
    { 
        link: "https://vintall.itch.io/our-dear-government", 
        img: "https://img.itch.zone/aW1nLzE1Mzk2NjQ0LnBuZw==/315x250%23c/L4gJvL.png", 
        name: "Our Dear Government",
        description: "You play as an ordinary civilian who suddenly finds himself in an government secret facility. Uncover it's secrets... or perish in the process",
        jamName: "Acerola Jam 0",
        jamTheme: "Aberration",
        startDate: "February 29th 2024",
        duration: "14 days",
    },
    { 
        link: "https://vintall.itch.io/one-must-imagine", 
        img: "https://img.itch.zone/aW1nLzE0MDQ4MTgyLnBuZw==/315x250%23c/3PsoYP.png", 
        name: "One must imagine Sisyphus happy",
        description: "Just let me push this boulder, Zeus...",
        jamName: "Pencil, Chisel, Code! #3",
        jamTheme: "Slippery Slope",
        startDate: "November 10th 2023",
        duration: "2 days",
    },
])
</script>

<template>
    <ProjectsColumn column-name="Game Jams (6)">
        <div v-for="item in gameJamsCards">
            <GameCard :link="item.link" :img="item.img" :name="item.name">
                <div class="flex flex-col overflow-hidden w-full h-full text-xl grow container self-stretch">
                    <div class="h-full">{{ item.description }}</div>
                    <div class="min-h-max">
                        <BreakLine></BreakLine>
                            <div class="flex flex-row flex-wrap w-full text-amber-200 mt-1 text-xs h-full grow justify-between">
                                <div class="text-left">
                                    GameJam: {{ item.jamName }}
                                    <br>
                                    Theme: {{ item.jamTheme }}
                                </div>
                                <div class="text-right">
                                    Duration: {{ item.duration }}
                                    <br>
                                    {{ item.startDate }}
                                </div>
                            </div>
                    </div>
                </div>
            </GameCard>
        </div>
    </ProjectsColumn>
</template>