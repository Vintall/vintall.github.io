<script setup>
import Background from './Background.vue'
import Header from './Header.vue';
import ContentContainer from './ContentContainer.vue';
</script>

<template>
        <Background>
            <Header></Header>
            <ContentContainer>
                <slot></slot>
            </ContentContainer>
        </Background>
</template>