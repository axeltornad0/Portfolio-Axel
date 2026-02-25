<script setup lang="ts">
import { RouterView } from 'vue-router';

import Navegacion from './components/Navegacion.vue';

//COMENTARIO AAAAAAAAAAAH

</script>

<template>
  <header>
    <Navegacion />
  </header>
    
  <main class="pt-7">   
    <RouterView />
  </main>


</template>

<style scoped>

</style>
