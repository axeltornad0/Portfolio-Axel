<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';

import { programas } from './programas';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button';


</script>

<template>
    <div class="bg-black flex flex-col items-center lg:flex-row lg:justify-evenly">
            
        <div class="flip-container mt-10 lg:mx-10 transition-transform lg:mb-5">
            <div class="flipper transition-transform">
                <div class="front transition-transform">
                    <img src="/imagenes/yo/yo-dibujo.jpg" alt="">
                </div>
                    
                <div class="back transition-transform">
                    <img src="/imagenes/yo/yo-real.jpg" alt="">
                </div>
            </div>
        </div>
            

        <div class="text-white text-center lg:text-justify my-5 mx-7 lg:mt-10 lg:max-w-120">
            <h1 class="text-2xl">Axel Tornado </h1>
            <h2 class="text-blue-100/60 text-lg">(He/him)</h2>
            <p class="text-sm text-blue-100/80">b. 2006</p>

            
            <div class="">
                <p class="mt-5">¡Hola! Soy Axel Tornado <span class="text-sm text-blue-100/60">(o Axel Martínez, si queremos ser más formales)</span>. </p>
                <p class="mt-2">Me gradué en <span class="font-semibold">Bachillerato Artístico</span> en el IES Isaac Peral (Cartagena) en 2024, y actualmente curso <span class="font-semibold">Diseño y Tecnologías Creativas</span> en la Universidad Politécnica de Valencia <span class="text-sm text-blue-100/60">(UPV para los amigos)</span>.</p>
                <p class="mt-5">¿Qué? ¿Que te cuente un poco más de mí? </p>
                <p>Me interesa la ilustración, el concept art, el cómic... Pero lo que más prevalece en mí es la <span class="font-semibold">necesidad de crear</span>. Sueño con hacer mundos e historias que hagan sentir de todo a la gente. Como cualquier artista, tengo proyectos que por ahora nunca han salido a la luz, pero que espero poder mostrar al mundo dentro de poco.</p>
                <p class="text-sm text-blue-100/60">(También programo de vez en cuando, como esta web...)</p>
            </div>
        </div>
            
    </div>

    <div class="bg-black text-white text-center pt-10 ">
        <h1 class="text-xl ">Programas dominados</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 mx-3 gap-3">
            <Card v-for="programa in programas" class="transition-all hover:scale-105 lg:hover:scale-110 bg-white/0 border-0 text-white rounded-none">
                <CardContent class="flex flex-col items-center">
                    <img class="h-[100px] object-contain" :src="`/imagenes/yo/${programa.logo}.png`" alt="">
                    <p class="flex flex-col justify-end mt-6">{{ programa.nombre }}</p>
                    <p class="text-sm text-blue-100/60">{{ programa.lenguaje }}</p>
                </CardContent>
            </Card>
        </div>
    </div>

    <div class="bg-black text-white text-center pt-10 flex flex-col items-center" >
        <h2 class="text-xl">¿Quieres decirme algo?</h2>

        <form class="space-y-6 py-8 rounded-lg shadow-lg w-[60vw]">
            <div>
                <Label for="nombre" />
                <Input id="nombre" placeholder="Nombre" class="lg:text-lg text-md bg-blue-200/20 focus:bg-blue-100 focus:text-black border- border-blue-200/50" required />
            </div>

            <div>
                <Label for="email" />
                <Input id="email" placeholder="Email" class="lg:text-lg text-md bg-blue-200/20 focus:bg-blue-100 focus:text-black border- border-blue-200/50" required />
            </div>

            <div>
                <Select>
                    <SelectTrigger class="w-[60vw] lg:text-lg text-md bg-blue-200/20  border-blue-200/50">
                        <SelectValue  placeholder="¿Sobre qué tema quieres hablar?" />
                    </SelectTrigger>

                    <SelectContent class="lg:text-lg text-sm bg-blue-100"">
                        <SelectItem value="comis">
                            Comisiones
                        </SelectItem>
                        <SelectItem value="estudios">
                            Estudios
                        </SelectItem>
                        <SelectItem value="proyectos">
                            Proyectos
                        </SelectItem>
                        <SelectItem value="otro">
                            Otra cosa
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label for="mensaje" />
                <Textarea id="mensaje" placeholder="Mensaje" class="lg:text-lg text-base bg-blue-200/20 focus:bg-blue-100 focus:text-black border- border-blue-200/50" required />
            </div>

            <Button class="w- bg-blue-100 text-black text-md mt-4 hover:text-blue-100 hover:bg-blue-100/15">
                Enviar
            </Button>

        </form>
    </div>

     
    
    
</template>

<style scoped>
    .flip-container {
        -webkit-perspective: 1000;
        background: transparent;
    }
    /* flip the picture when hover */
    
    .flip-container:hover .flipper,
    .flip-container.hover .flipper {
        -webkit-transform: rotateY(180deg);
    }
    
    .flip-container,
    .back > img {
        width: 200px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        @media (width >= 64rem /* 1024px */) {
        width: 400px;
    }
    }

    .front > img {
        width: 200px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        @media (width >= 64rem /* 1024px */) {
        width: 400px;
    }
    }
    /* flip speed */
    
    .flipper {
        -webkit-transition: 1.5s;
        -webkit-transform-style: preserve-3d;
        position: relative;
    }
    /* hide back  during flip */
    
    .front,
    .back {
        -webkit-backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    /* front placed above back */
    
    .front {
        z-index: 2;
        background: rgba(218, 138, 138, 0);
    }
    /* back, initially hidden */
    
    .back {
        -webkit-transform: rotateY(180deg);
        background: rgba(218, 138, 138, 0);
    }
</style>