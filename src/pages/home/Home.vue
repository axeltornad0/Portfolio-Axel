<script lang="ts" setup>
import { useMouseMotion } from '@/composables/useMouseMotion';



const { mouseLeave, mouseMove, mousePosition } = useMouseMotion()


</script>

<template>

<div class="">
    
    
    <div class="flex flex-row bg-black">
        
        <div class="fondo-ojo"></div>

        <div id="pupila"
        class="h-150 w-150"
        @mousemove="mouseMove"
        @mouseleave="mouseLeave"
        :style="{
            backgroundPositionX: `calc(50% + ${mousePosition.x}px)`,
            backgroundPositionY: `calc(50% + ${mousePosition.y}px)`,
            transition: 'background-position 0.1s ease'
        }"
        ></div>

        <img class="object-contain absolute inset-0 z-20 pointer-events-none"
        src="/imagenes/casa/parpado.png" alt="">
        
        
    </div>
    
    <div class="flex flex-col justify-end items-center bg-red-300 h-screen w-full">
        <h1 class="text-white text-4xl pb-8">AXEL TORNADO</h1>
    </div>
</div>



</template>

<style scoped>
    h1 {
        font-family: Stack Sans Headline;
    }

    .fondo-ojo {
        background-color: white;
        width: 600px;
        height: 600px;
        z-index: 0;
        position: absolute;
        pointer-events: none;
    }

    div#pupila {
        background-size: 100% 100%;
        background-position: center center;
        /* background-color: transparent; */
        background-image: url('../imagenes/casa/pupila.png');
        background-repeat: no-repeat;
        z-index: 10;
    }


</style>