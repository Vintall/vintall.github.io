<script setup>
import GitHubIcon from "@/assets/media/images/socialNetworks/GitHubCircle.png"
import DiscordIcon from "@/assets/media/images/socialNetworks/DiscordCircle.png"
import TelegramCircle from "@/assets/media/images/socialNetworks/TelegramCircle.png"
</script>

<template>
    <div class="flex flex-row flex-wrap w-full">
        <div class="flex flex-row w-full max-w-220 mx-auto bg-cyan-950 p-3 mt-5 rounded-3xl items-center justify-stretch">
            <div class="flex flex-row flex-wrap space-x-3 ml-5 w-full">
                <RouterLink to = "/" class="text-gray-300 font-bold hover:text-gray-500">Resources</RouterLink>
                <RouterLink to = "/projects" class="text-gray-300 font-bold hover:text-gray-500">My Projects</RouterLink>
                <RouterLink to = "/resume" class="text-gray-300 font-bold hover:text-gray-500">Resume</RouterLink>
            </div>
            <div class="flex flex-row flex-wrap items-center justify-end w-full">
                <a href="https://github.com/Vintall">
                    <img class="w-10 h-10 rounded-full hover:outline-1 hover:outline-cyan-400" :src=GitHubIcon>
                </a>
                <a href="https://discord.gg/77HgCv2JRw">
                    <img class="w-10 h-10 rounded-full hover:outline-1 hover:outline-cyan-400" :src=DiscordIcon>
                </a>
                <a href="http://t.me/vintall">
                    <img class="w-10 h-10 rounded-full hover:outline-1 hover:outline-cyan-400" :src=TelegramCircle>
                </a>
            </div>
        </div>
    </div>
</template>