<script setup>
import ProjectsColumn from '@/components/projectsColumns/ProjectsColumn.vue'
import GameCard from '@/components/GameCard.vue';
import { ref } from 'vue';

const projectsCards = ref([
    { link: "https://vintall.itch.io/money-no-money", img: "https://img.itch.zone/aW1nLzIwMDQ4NjA5LnBuZw==/315x250%23c/DlpktT.png", name: "Money problem? No problem 👌" },
    { link: "https://vintall.itch.io/andydouglas", img: "https://img.itch.zone/aW1nLzE5MTg3ODM1LmdpZg==/original/kueQmM.gif", name: "Andy&Douglas" },
    { link: "https://vintall.itch.io/deatomiser", img: "https://img.itch.zone/aW1nLzE3NDcyOTY5LnBuZw==/315x250%23c/%2Fhf2gL.png", name: "Deatomiser" },
    { link: "https://vintall.itch.io/alcaists", img: "https://img.itch.zone/aW1nLzE3MTUwNjc5LnBuZw==/315x250%23c/hMvU9U.png", name: "Alcaists" },
    { link: "https://vintall.itch.io/our-dear-government", img: "https://img.itch.zone/aW1nLzE1Mzk2NjQ0LnBuZw==/315x250%23c/L4gJvL.png", name: "Our Dear Government" },
    { link: "https://vintall.itch.io/one-must-imagine", img: "https://img.itch.zone/aW1nLzE0MDQ4MTgyLnBuZw==/315x250%23c/3PsoYP.png", name: "One must imagine Sisyphus happy" },
])

</script>

<template>
    <ProjectsColumn column-name="Game Jams">
        <div v-for="item in projectsCards">
            <GameCard :link="item.link" :img="item.img" :name="item.name"></GameCard>
        </div>
    </ProjectsColumn>
</template>