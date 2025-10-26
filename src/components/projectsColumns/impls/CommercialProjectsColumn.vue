<script setup>
import ProjectsColumn from '../ProjectsColumn.vue';
import GameCard from '@/components/GameCard.vue'
import MergeGamesData from '@/components/projects/Commercial/MergeGames/MergeGamesData.js'
import ElementalWarsPreview from '@/assets/media/projects/elementalWars.png'
import { ref } from 'vue';

const mergeGamesTags = MergeGamesData()
</script>

<template>
    <ProjectsColumn column-name="Commercial Projects (8)">
        <GameCard 
            img="https://play-games.googleusercontent.com/vp/mp4/1280x720/6ITL3WYDoFg.mp4" 
            link="https://play.google.com/store/apps/details?id=com.jarvigames.viceonline&hl=en"
            name="Flex City: Online RP Car Game">
            Open world GTA-like mobile role-playing game, featuring large map, PBR visuals and 60+ players in one lobby. <br> 
            <span class="text-amber-300">Position: <a class="underline">Senior Technical Artist</a> at Jarvi Games</span>
            <span class="text-amber-200">Target Platform: Android & IOS</span>
        </GameCard>
        <GameCard 
            img="https://play-lh.googleusercontent.com/Dn1Gp9QdlvpT1Ya2cKLCTZgCbu8RO5u616Fm6zRQrDtw8wJjxHu_yCHXjG4EohLzWA=w526-h296" 
            :tags=mergeGamesTags 
            name="Crypto Merge Games">
            A series of 6 Merge Games with crypto currency integration. <br> 
            <span class="text-amber-300">Position: <a class="underline">Middle Unity Developer</a> at Realis.Network</span>
            <span class="text-amber-200">Target Platform: Android</span>
        </GameCard>
        <GameCard 
            name="Elemental Wars"
            :img=ElementalWarsPreview 
            link="https://play.google.com/store/apps/details?id=elemental.battler.nft.card.meowgon&hl=en">
            Turn-based deck-building strategy game. PvP&PvE adventures. Characters consists of 3 body parts. 
            Assemble your own combination to adjust for you play-style. <br> 
            <span class="text-amber-300">Position: <a class="underline">Middle Unity Developer</a> at Realis.Network</span>
            <span class="text-amber-200">Target Platform: Android</span>
        </GameCard>
    </ProjectsColumn>
</template>