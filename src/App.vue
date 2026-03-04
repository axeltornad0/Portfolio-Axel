<script setup lang="ts">
import { RouterView } from 'vue-router';

import Navegacion from './components/Navegacion.vue';

//COMENTARIO AAAAAAAAAAAH

</script>

<template>
  

  <div class="grid grid-row-[auto_1fr_auto] flex-col">
    <header>
      <Navegacion class="z-30 absolute"/>
    </header>
      
    <main class="pt-7">   
      <RouterView />
    </main>

    <footer class="text-[12px] py-2 flex items-center justify-end flex-col bg-gray-900 text-white/80">
      <p> Página creada por Axel Tornado, 2026. </p>
      <p> *Poner iconos de redes sociales* </p>
    </footer>

  </div>

</template>

<style scoped>

</style>
