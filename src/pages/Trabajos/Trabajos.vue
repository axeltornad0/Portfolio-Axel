<script setup lang="ts">
import { obras } from './obrasDetalles';

let ilustracion = obras.slice(0,10);
let comic = obras.slice(11,13);
let personajes = obras.slice(13,15);
let diseno = obras.slice(15,18);
let otros = obras.slice(18,19);


</script>

<template>
    <div>
        <h1 class="text-4xl text-center py-1.5">MIS TRABAJOS</h1>
    </div>

    <section id="ilustracion" class="bg-black text-white">
        <h1 class="text-3xl text-center py-2 pt-5"> Ilustración </h1>

        <div class="transition-all grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <Card
            class="cursor-pointer w-50 h-75 text-white
            sm:w-70 sm:h-85
            md:w-80 md:h-100
            xl:w-100 xl:h-110
            "
            v-for="obra in ilustracion"
            >
                <CardContent
                class="flex flex-col items-center gap-1 w-full my-1 mx-1 "
                >
                    <div class="absolute w-50 h-50 mt-2 flex items-end justify-center
                    hover:bg-black/40 hover:backdrop-blur-md text-white/0 hover:text-white
                    transition-all
                    sm:w-70 sm:h-70
                    md:w-80 md:h-80
                    xl:w-100 xl:h-100
                    ">
                        <p class="mb-5 xl:text-lg">{{ obra.fecha }}</p>
                    </div>

                    <img 
                    class="object-contain mt-2 felx items-center"
                    :src="`/imagenes/trabajos/${obra.grid}.jpg`" alt=""
                    >

                    <h2 class="font-medium text-lg lg:text-xl text-center pt-3"> {{ obra.titulo }} </h2>
                </CardContent>
            </Card>  
        </div>

    </section>

    <section id="comic" class="bg-black text-white">
       <h1 class="text-3xl text-center py-2 pt-5"> Cómic </h1>
       
        <div class="transition-all grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <Card
            class="cursor-pointer w-50 h-75 text-white
            sm:w-70 sm:h-85
            md:w-80 md:h-100
            xl:w-100 xl:h-110
            "
            v-for="obra in comic"
            >
                <CardContent
                class="flex flex-col items-center gap-1 w-full my-1 mx-1 "
                >
                    <div class="absolute w-50 h-50 mt-2 flex items-end justify-center
                    hover:bg-black/40 hover:backdrop-blur-md text-white/0 hover:text-white
                    transition-all
                    sm:w-70 sm:h-70
                    md:w-80 md:h-80
                    xl:w-100 xl:h-100
                    ">
                        <p class="mb-5 xl:text-lg">{{ obra.fecha }}</p>
                    </div>

                    <img 
                    class="object-contain mt-2 felx items-center"
                    :src="`/imagenes/trabajos/${obra.grid}.jpg`" alt=""
                    >

                    <h2 class="font-medium text-lg lg:text-xl text-center pt-3"> {{ obra.titulo }} </h2>
                </CardContent>
            </Card>  
        </div>
    </section>

    <section id="personajes" class="bg-black text-white">
        <h1 class="text-3xl text-center py-2 pt-10"> Diseño de personajes </h1>
        
        <div class="transition-all grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <Card
            class="cursor-pointer w-50 h-75 text-white
            sm:w-70 sm:h-85
            md:w-80 md:h-100
            xl:w-100 xl:h-110
            "
            v-for="obra in personajes"
            >
                <CardContent
                class="flex flex-col items-center gap-1 w-full my-1 mx-1 "
                >
                    <div class="absolute w-50 h-50 mt-2 flex items-end justify-center
                    hover:bg-black/40 hover:backdrop-blur-md text-white/0 hover:text-white
                    transition-all
                    sm:w-70 sm:h-70
                    md:w-80 md:h-80
                    xl:w-100 xl:h-100
                    ">
                        <p class="mb-5 xl:text-lg">{{ obra.fecha }}</p>
                    </div>

                    <img 
                    class="object-contain mt-2 felx items-center"
                    :src="`/imagenes/trabajos/${obra.grid}.jpg`" alt=""
                    >

                    <h2 class="font-medium text-lg lg:text-xl text-center pt-3"> {{ obra.titulo }} </h2>
                </CardContent>
            </Card>  
        </div>
    </section>

    <section id="diseno" class="bg-black text-white">
        <h1 class="text-3xl text-center py-2 pt-10"> Diseño gráfico </h1>
        
        <div class="transition-all grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <Card
            class="cursor-pointer w-50 h-75 text-white
            sm:w-70 sm:h-85
            md:w-80 md:h-100
            xl:w-100 xl:h-110
            "
            v-for="obra in diseno"
            >
                <CardContent
                class="flex flex-col items-center gap-1 w-full my-1 mx-1 "
                >
                    <div class="absolute w-50 h-50 mt-2 flex items-end justify-center
                    hover:bg-black/40 hover:backdrop-blur-md text-white/0 hover:text-white
                    transition-all
                    sm:w-70 sm:h-70
                    md:w-80 md:h-80
                    xl:w-100 xl:h-100
                    ">
                        <p class="mb-5 xl:text-lg">{{ obra.fecha }}</p>
                    </div>

                    <img 
                    class="object-contain mt-2 felx items-center"
                    :src="`/imagenes/trabajos/${obra.grid}.jpg`" alt=""
                    >

                    <h2 class="font-medium text-lg lg:text-xl text-center pt-3"> {{ obra.titulo }} </h2>
                </CardContent>
            </Card>  
        </div>
    </section>

    <section id="otros" class="bg-black text-white">
        <h1 class="text-3xl text-center py-2 pt-10"> Otros </h1>
        
        <div class="transition-all grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <Card
            class="cursor-pointer w-50 h-75 text-white
            sm:w-70 sm:h-85
            md:w-80 md:h-100
            xl:w-100 xl:h-110
            "
            v-for="obra in otros"
            >
                <CardContent
                class="flex flex-col items-center gap-1 w-full my-1 mx-1 "
                >
                    <div class="absolute w-50 h-50 mt-2 flex items-end justify-center
                    hover:bg-black/40 hover:backdrop-blur-md text-white/0 hover:text-white
                    transition-all
                    sm:w-70 sm:h-70
                    md:w-80 md:h-80
                    xl:w-100 xl:h-100
                    ">
                        <p class="mb-5 xl:text-lg">{{ obra.fecha }}</p>
                    </div>

                    <img 
                    class="object-contain mt-2 felx items-center"
                    :src="`/imagenes/trabajos/${obra.grid}.jpg`" alt=""
                    >

                    <h2 class="font-medium text-lg lg:text-xl text-center pt-3"> {{ obra.titulo }} </h2>
                </CardContent>
            </Card>  
        </div>
    </section>

</template>

<style scoped>

</style>