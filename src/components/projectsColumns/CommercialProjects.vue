<script setup>
import ProjectsColumn from '../ProjectsColumn.vue';
import GameCard from '../GameCard.vue';
import MergeGamesData from '@/components/views/projects/MergeGamesData.js'
import { ref } from 'vue';

const mergeGamesTags = MergeGamesData()
const elementalWarsTags = ref([
    { 
        name: "Elemental Wars", 
        img: "https://play-lh.googleusercontent.com/vwzBQXN7Ghb8XrbxBNEHI_hFRCfVdqVm-DRFWlYeFWivQAy5RbOJ4yHeWllmFRC5vBK9=w240-h480",
        link: "https://play.google.com/store/apps/details?id=elemental.battler.nft.card.meowgon&hl=en",
    }
])
</script>

<template>
    <ProjectsColumn column-name="Commercial Projects">
        <GameCard img="https://play-lh.googleusercontent.com/Dn1Gp9QdlvpT1Ya2cKLCTZgCbu8RO5u616Fm6zRQrDtw8wJjxHu_yCHXjG4EohLzWA=w526-h296" :tags=mergeGamesTags name="Crypto Merge Games"></GameCard>
        <GameCard img="https://play-lh.googleusercontent.com/OGXURSY54hmZKrfDb8MDUkCeSbwwvmgFJBwJXYdSEsVrLsZiLUO26PAN0l1UpAHB80o=w526-h296" :tags=elementalWarsTags name="Elemental Wars"></GameCard>
    </ProjectsColumn>
</template>