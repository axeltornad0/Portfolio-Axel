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

<header class="">
    
            
    <div class="bg-black text-white transition-all sm:text-[4vw] lg:text-[5vw] pb-3 pt-6 text-center">
        <h1 class="titulo">AXEL TORNADO</h1>
    </div>      
</header>


<div class="bg-black flex flex-col gap-8 justify-between items-center text-white transition-all">
    <!-- paso el carrusel a un componente o hago otro aquí?? decisions decisions.... no es tan complicado creo hmmm -->
    
    <RouterLink to="/portfolio" class="w-[99vw] aspect-1920/700 absolute z-20 text-white/0
    flex items-center justify-center flex-col
    hover:text-blue-100 transition-colors hover:bg-gray-900/40 hover:backdrop-blur-sm">
        <div class="flex items-center justify-center flex-col md:text-xl lg:text-3xl">
            <h2>¡Echále un vistazo a mi portfolio!</h2>
            <h4>Cambiar fotos a una por seccion o algo asi</h4>
        </div>
    </RouterLink>

    

    <Carousel class="w-[99vw] relative mb-6 lg:mb-12 mt-3"
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
    .titulo {
        font-family: Stack Sans Headline;
    }

</style>