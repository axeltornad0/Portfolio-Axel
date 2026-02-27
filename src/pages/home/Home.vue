<script lang="ts" setup>
import { useMouseMotion } from '@/composables/useMouseMotion';



const { mouseLeave, mouseMove, mousePosition } = useMouseMotion()


</script>

<template>

<div class="">
    
    <div class="relative w-[100vw] h-[40vw] bg-black flex justify-around" @mousemove="mouseMove"
            @mouseleave="mouseLeave">
        <div class="w-[100vw] flex flex-row justify-around z-10"
            >
                <div id="pupilaDer"
                :style="{
                    backgroundPositionX: `calc(50% - ${mousePosition.x}px)`,
                    backgroundPositionY: `calc(50% - ${mousePosition.y}px)`,
                    transition: 'background-position 0.1s ease'
                }"
                
                ></div>

                <div id="pupilaDer"
                :style="{
                    backgroundPositionX: `calc(50% - ${mousePosition.x}px)`,
                    backgroundPositionY: `calc(50% - ${mousePosition.y}px)`,
                    transition: 'background-position 0.1s ease'
                }"
                ></div>
            </div>

            <div class="h-[40vw] flex flex-row justify-around z-20 pointer-events-none top-0 inset-x-0 absolute">
                    <img class="parpado"
                    src="/imagenes/casa/parpado.png" alt="">

                    <img class="parpado"
                    src="/imagenes/casa/parpadoIZQ.png" alt="">

            </div>
            
            <div class="text-white text-[4vw] pb-3 z-30 absolute text-center mx-auto w-screen bottom-[1%] pointer-events-none">
                <h1 >AXEL TORNADO</h1>
            </div>

            
    </div>
    
</div>



</template>

<style scoped>
    h1 {
        font-family: Stack Sans Headline;
    }

    div#pupilaDer {
        max-width: 600px;
        max-height: 600px;
        background-size: 100% 100%;
        background-position: center center;
        background-color: white;
        background-image: url('../imagenes/casa/pupila.png');
        background-repeat: no-repeat;
        aspect-ratio: 1/1;
    }

    .parpado {
        object-fit: contain;
        max-width: 600px;
    }

</style>