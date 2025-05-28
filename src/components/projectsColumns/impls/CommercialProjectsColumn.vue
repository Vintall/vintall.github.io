<script setup>
import ProjectsColumn from '../ProjectsColumn.vue';
import GameCard from '@/components/GameCard.vue'
import MergeGamesData from '@/components/projects/Commercial/MergeGames/MergeGamesData.js'
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
        <GameCard 
            img="https://play-lh.googleusercontent.com/Dn1Gp9QdlvpT1Ya2cKLCTZgCbu8RO5u616Fm6zRQrDtw8wJjxHu_yCHXjG4EohLzWA=w526-h296" 
            :tags=mergeGamesTags name="Crypto Merge Games">
            A series of 6 Merge Games with crypto currency integration. <br> <span class="text-amber-200">Target Platform: Google Play</span>
        </GameCard>
        <GameCard 
            name="Elemental Wars"
            img="https://play-lh.googleusercontent.com/OGXURSY54hmZKrfDb8MDUkCeSbwwvmgFJBwJXYdSEsVrLsZiLUO26PAN0l1UpAHB80o=w526-h296" 
            link="https://play.google.com/store/apps/details?id=elemental.battler.nft.card.meowgon&hl=en">
            Turn-based deck-building strategy game. PvP&PvE adventures. Characters consists of 3 body parts. 
            Assemble your own combination to adjust for you play-style. <br> <span class="text-amber-200">Target Platform: Google Play</span>
        </GameCard>
    </ProjectsColumn>
</template>