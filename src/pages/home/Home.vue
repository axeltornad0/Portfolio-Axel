<script lang="ts" setup>
import { useMouseMotion } from '@/composables/useMouseMotion';



const { mouseLeave, mouseMove, mousePosition } = useMouseMotion()


</script>

<template>

<div class="">
    
    <div class="relative h-160 bg-black flex" @mousemove="mouseMove"
            @mouseleave="mouseLeave">
        <div class="flex flex-row w-screen justify-around z-10 absolute"
            >
                <div id="pupilaDer"
                class="h-150 w-150"
                :style="{
                    backgroundPositionX: `calc(50% - ${mousePosition.x}px)`,
                    backgroundPositionY: `calc(50% - ${mousePosition.y}px)`,
                    transition: 'background-position 0.1s ease'
                }"
                
                ></div>

                <div id="pupilaIzq"
                class="h-150 w-150"
                :style="{
                    backgroundPositionX: `calc(50% - ${mousePosition.x}px)`,
                    backgroundPositionY: `calc(50% - ${mousePosition.y}px)`,
                    transition: 'background-position 0.1s ease'
                }"
                ></div>
            </div>

            <div class="flex flex-row justify-around z-20 pointer-events-none w-screen inset-0 absolute">
                    <img class="object-contain h-150 w-150"
                    src="/imagenes/casa/parpado.png" alt="">

                    <img class="object-contain h-150 w-150"
                    src="/imagenes/casa/parpadoIZQ.png" alt="">

            </div>
            
            <div class="text-white text-4xl pb-8 z-30 absolute text-center mx-auto w-screen inset-x-0 bottom-0 pointer-events-none">
                <h1 >AXEL TORNADO</h1>
            </div>

            
    </div>
    
</div>



</template>

<style scoped>
    h1 {
        font-family: Stack Sans Headline;
    }

    .fondo-ojo {
        background-color: white;
        height: 600px;
        z-index: 0;
        position: absolute;
        pointer-events: none;
    }

    div#pupilaDer {
        background-size: 100% 100%;
        background-position: center center;
        background-color: white;
        background-image: url('../imagenes/casa/pupila.png');
        background-repeat: no-repeat;
        aspect-ratio: 1/1;
    }

    div#pupilaIzq {
        background-size: 100% 100%;
        background-position: center center;
        background-color: white;
        background-image: url('../imagenes/casa/pupila.png');
        background-repeat: no-repeat;
        aspect-ratio: 1/1;
    }


</style>