<script setup>
</script>

<template>
    <div class="flex flex-row w-full justify-center">
        <div class="flex flex-row w-1/2 h-21 bg-cyan-950 p-3 rounded-3xl mt-5">
            <div class="flex basis-1/2 items-center space-x-3 flex-row justify-normal ml-5">
                <RouterLink to = "/" class="text-gray-300 font-bold">Home</RouterLink>
                <RouterLink to = "/projects" class="text-gray-300 font-bold">Projects</RouterLink>
            </div>
            <div class="flex basis-1/2 items-center flex-row justify-end">
                <div class="min-w-10 min-h-10 bg-amber-600 m-1"></div>
                <div class="min-w-10 min-h-10 bg-amber-500 m-1"></div>
                <div class="min-w-10 min-h-10 bg-amber-400 m-1"></div>
                <div class="min-w-10 min-h-10 bg-amber-300 m-1"></div>
            </div>
        </div>
    </div>
</template>