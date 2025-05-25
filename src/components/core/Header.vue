<script setup>
</script>

<template>
    <div class="flex flex-row flex-wrap w-full">
        <div class="flex flex-row w-full max-w-220 mx-auto bg-cyan-950 p-3 mt-5 rounded-3xl items-center justify-stretch">
            <div class="flex flex-row flex-wrap space-x-3 ml-5 w-full">
                <RouterLink to = "/" class="text-gray-300 font-bold">Home</RouterLink>
                <RouterLink to = "/projects" class="text-gray-300 font-bold">Projects</RouterLink>
                <RouterLink to = "/resources" class="text-gray-300 font-bold">Resources</RouterLink>
                <RouterLink to = "/resources" class="text-gray-300 font-bold">Resume</RouterLink>
            </div>
            <div class="flex flex-row flex-wrap items-center justify-end w-full">
                <div class="w-10 h-10 bg-cyan-700 m-1"></div>
                <div class="w-10 h-10 bg-cyan-600 m-1"></div>
                <div class="w-10 h-10 bg-cyan-500 m-1"></div>
                <div class="w-10 h-10 bg-cyan-400 m-1"></div>
            </div>
        </div>
    </div>
</template>