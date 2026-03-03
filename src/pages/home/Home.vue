<script lang="ts" setup>
import { useMouseMotion } from '@/composables/useMouseMotion';

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'



const { mouseLeave, mouseMove, mousePosition } = useMouseMotion()

const seleccion: string[] = ["ILUST-Warrior","EXTRA-ILUST-Disco","EXTRA-ILUST-DM","EXTRA-ILUST-Rei"]

</script>

<template>

<header class="">

    <!-- REPROGRAMAR ENTERO UGH -->
    <div class="relative w-screen h-[40vw] bg-black flex justify-around" @mousemove="mouseMove"
            @mouseleave="mouseLeave">
        <div class="w-screen flex flex-row justify-around z-10"
            >
                <div id="pupila"
                :style="{
                    backgroundPositionX: `calc(50% - ${mousePosition.x}px)`,
                    backgroundPositionY: `calc(50% - ${mousePosition.y}px)`,
                    transition: 'background-position 0.1s ease'
                }"
                
                ></div>

                <div id="pupila"
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
            
            <div class="text-white text-[3vw] transition-all sm:text-[4vw] lg:text-[5vw] pb-3 z-30 absolute text-center mx-auto w-screen bottom-[1%] pointer-events-none">
                <h1 >AXEL TORNADO</h1>
            </div>      
    </div>
</header>


<div class="bg-black flex flex-col gap-8 justify-between items-center text-white transition-all">
    <!-- paso el carrusel a un componente o hago otro aquí?? decisions decisions.... no es tan complicado creo hmmm -->
    
    <RouterLink to="/portfolio" class="w-[55vw] aspect-16/9 max-h-[650px] absolute z-20 text-white/0
    flex items-center justify-center flex-col
    hover:text-white transition-colors hover:bg-black/30 hover:backdrop-blur-sm">
        <div class="flex items-center justify-center flex-col">
            <h2>¡Echále un vistazo a mi portfolio!</h2>
            <h4>Cambiar fotos a una por seccion o algo asi</h4>
        </div>
    </RouterLink>

    

    <Carousel class="w-[55vw] relative mb-6 lg:mb-12 mt-3"
                :opts="{ loop:true, align: 'start'}"
                :plugins="[Autoplay({
                    delay: 1000,
                })]"
                >
                    <CarouselContent class="flex items-center">
                    <CarouselItem v-for="(imagen,index) in seleccion" :key="index">
                        <div>
                        <Card class="flex items-center justify-center border-0 p-0 gap-0 bg-black/0">
                            <CardContent class="flex flex-col items-center justify-center">
                                 
                                <img
                                :src="`imagenes/trabajos/${imagen}.jpg`"
                                :alt="`Imagen ${index+1}`"
                                class="max-h-[650px] w-auto object-contain"
                                >

                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class=" hidden justify-center items-center bg-black text-white border-0 hover:bg-white/30 hover:text-white
                    lg:scale-130" />
                    <CarouselNext class="hidden justify-center items-center bg-black text-white border-0 hover:bg-white/30 hover:text-white
                    lg:scale-130"/>
                </Carousel>
</div>



</template>

<style scoped>
    h1 {
        font-family: Stack Sans Headline;
    }

    div#pupila {
        max-width: 40vw;
        max-height: 40vw;
        background-size: 100% 100%;
        background-position: center center;
        background-color: white;
        background-image: url('../imagenes/casa/pupila.png');
        background-repeat: no-repeat;
        aspect-ratio: 1/1;
    }

    .parpado {
        object-fit: contain;
        max-width: 40vw;
    }

</style>