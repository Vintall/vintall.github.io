<template>
    <div class="w-full min-h-screen bg-repeat bg-cyan-950 bg-fixed bg-[length:25px_25px]">
        <div class="w-full min-h-screen bg-repeat bg-blend-color from-0% to-30% from-cyan-800/30 to-cyan-900/100 bg-gradient-to-bl bg-fixed bg-[length:25px_25px]">
            <div class="w-full min-h-screen bg-repeat bg-blend-color from-0% to-30% from-cyan-800/30 to-cyan-900/30 bg-gradient-to-tr bg-fixed bg-[length:25px_25px]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>