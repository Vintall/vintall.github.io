<script setup>
import ContentView from '@/components/core/ContentView.vue';
import CommercialProjectsColumn from '@/components/projectsColumns/impls/CommercialProjectsColumn.vue';
import GameJamsColumn from '@/components/projectsColumns/impls/GameJamsColumn.vue';
import SimulationsColumn from '@/components/projectsColumns/impls/SimulationsColumn.vue';
import OtherProjectsColumn from '@/components/projectsColumns/impls/OtherProjectsColumn.vue';
</script>

<template>
    <div>
        <ContentView>
            <div class="flex flex-col flex-wrap gap-5">
                <CommercialProjectsColumn></CommercialProjectsColumn>
                <GameJamsColumn></GameJamsColumn>
                <SimulationsColumn></SimulationsColumn>
                <OtherProjectsColumn></OtherProjectsColumn>
            </div>
        </ContentView>
    </div>
</template>