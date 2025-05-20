<script setup>
import GameCard from '../GameCard.vue';
import Content from '../Content.vue';

</script>

<template>
    <img class="absolute w-full h-full -z-10" src="/src/assets/media/SlapSlapping.gif">

    </img>
    <div>
        <Content/>
    </div>
    <div class="flex flex-row w-full min-h-15 bg-blue-200 justify-items-end">
        <div class="basis-1/3 h-5 bg-amber-200"></div>
        <div class="basis-2/3 h-5 bg-amber-100"></div>
    </div>
    <RouterLink to = "/">Go to Home</RouterLink>
    <RouterLink to = "/projects">Go to Projects</RouterLink>
   <div>
    <GameCard/>
   </div>
</template>