<script setup lang="ts">
import { RouterView } from 'vue-router';

import Navegacion from './components/Navegacion.vue';

//COMENTARIO AAAAAAAAAAAH

</script>

<template>
  

  <div class="grid grid-row-[auto_1fr_auto]">
    <header>
      <Navegacion class="z-30 absolute"/>
    </header>
      
    <main class="pt-7">   
      <RouterView />
    </main>

    <footer class="text-[12px] p-2 flex items-end justify-center">
      <p> Página creada por Axel Tornado, 2026. </p>
    </footer>

  </div>

</template>

<style scoped>

</style>
