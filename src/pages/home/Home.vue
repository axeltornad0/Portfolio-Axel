<script lang="ts" setup>
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

const seleccion: string[] = ["EXTRA-ILUST-Warrior","EXTRA-ILUST-Disco","EXTRA-ILUST-Rei"]

</script>

<template>

<div class="bg-black  text-white text-center">
    <div class=" pb-3 pt-6 ">
        <p class="text-md transition-all md:text-xl lg:text-3xl">Hola, soy</p>
        <p class="titulo transition-all text-3xl md:text-6xl lg:text-9xl"> AXEL TORNADO</p>
        <p class="text-md transition-all md:text-xl lg:text-3xl pt-5"> ¡Te doy la bienvenida a mi página web! </p>
    </div>

    <div class="h-[400px] text-sm">
        <p>aqui hay pegatinas o algo asi y si les clicas te llevan al sobre mí</p>
    </div>

    <div class="flex flex-col gap-8 justify-between items-center text-white transition-all">
        
        <RouterLink to="/portfolio" class="w-[95vw] aspect-1920/700 absolute z-20 text-white/0
        flex items-center justify-center flex-col
        hover:text-blue-100 transition-colors hover:bg-gray-900/40 hover:backdrop-blur-sm">
            <div class="flex items-center justify-center flex-col md:text-xl lg:text-3xl">
                <h2>¡Echále un vistazo a mi portfolio!</h2>
                <h4>Cambiar fotos a una por seccion o algo asi</h4>
            </div>
        </RouterLink>

        

        <Carousel class="w-[95vw] relative mb-6 lg:mb-12 mt-3"
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

</div>

    



</template>

<style scoped>
    .titulo {
        font-family: Stack Sans Headline;
    }

</style>