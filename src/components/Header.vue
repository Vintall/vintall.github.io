<script setup>
</script>

<template>
    <div class="flex flex-row flex-wrap w-full justify-center">
        <div class="flex flex-row w-1/2 h-min-21 bg-cyan-950 p-3 rounded-3xl mt-5">
            <div class="flex flex-row flex-wrap basis-1/2 items-center space-x-3 justify-normal ml-5">
                <RouterLink to = "/" class="text-gray-300 font-bold">Home</RouterLink>
                <RouterLink to = "/projects" class="text-gray-300 font-bold">Projects</RouterLink>
                <RouterLink to = "/resources" class="text-gray-300 font-bold">Resources</RouterLink>
                <RouterLink to = "/resources" class="text-gray-300 font-bold">Resume</RouterLink>
            </div>
            <div class="flex flex-row flex-wrap basis-1/2 items-center justify-end">
                <div class="min-w-10 min-h-10 bg-cyan-700 m-1"></div>
                <div class="min-w-10 min-h-10 bg-cyan-600 m-1"></div>
                <div class="min-w-10 min-h-10 bg-cyan-500 m-1"></div>
                <div class="min-w-10 min-h-10 bg-cyan-400 m-1"></div>
            </div>
        </div>
    </div>
</template>