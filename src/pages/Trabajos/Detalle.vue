<script setup lang="ts">
import { obras, type Obra } from './obrasDetalles';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const route = useRoute()
const router = useRouter()

const obra = ref<Obra | undefined>(
    obras.find(obras => obras.id === Number(route.params.id))   
)

</script>

<template>
    <div
    class="flex transition-all flex-col gap-8 justify-between items-center text-white transition-all"
    v-if="obra"
    >
            <h1 class="text-2xl pt-5"> {{obra.titulo}} </h1>

            <p class="text-sm">{{ obra.fecha }}</p>

            <p> {{ obra.descripcion }} </p>

            <div>
                <Carousel class="w-[65vw] relative"
                :opts="{ loop:true, align: 'start'
                }">
                    <CarouselContent class="flex items-center">
                    <CarouselItem v-for="(detalle,index) in obra.imagen" :key="index">
                        <div>
                        <Card class="flex items-center justify-center border-0 p-0 gap-0 bg-black/0">
                            <CardContent class="flex flex-col items-center justify-center">
                                <img
                                :src="`imagenes/trabajos/${detalle}.jpg`"
                                :alt="`Imagen ${index+1}`"
                                class="max-h-[650px] w-auto object-contain"
                                >

                                <p class="text-center text-xs md:text-sm py-3 text-white/70"> Poner un array de string más que ponga cosas del proceso? que sea opcional!! </p>

                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious v-show="obra.imagen.length > 1" class="flex justify-center items-center bg-black text-white border-0 hover:bg-white/30 hover:text-white
                    lg:scale-130" />
                    <CarouselNext v-show="obra.imagen.length > 1" class="flex justify-center items-center bg-black text-white border-0 hover:bg-white/30 hover:text-white
                    lg:scale-130"/>
                </Carousel>
            </div>
            
    </div>
</template>



<style scoped>

</style>