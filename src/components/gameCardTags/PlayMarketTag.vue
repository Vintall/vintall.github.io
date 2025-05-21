<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  }
})
import GameCardTag from '../GameCardTag.vue';
import GooglePlayLogo from '@/assets/media/images/GooglePlayLogo.png'
</script>

<template>
  <GameCardTag :link=link :img=GooglePlayLogo></GameCardTag>
</template>