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

    <footer >
      <p>Holaaaa</p>
    </footer>

  </div>

</template>

<style scoped>

</style>
