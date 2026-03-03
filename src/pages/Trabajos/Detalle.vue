<script setup lang="ts">
import { obras, type Obra } from './obrasDetalles';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const obra = ref<Obra | undefined>(
    obras.find(obras => obras.id === Number(route.params.id))   
)

</script>

<template>
    <div v-if="obra">
        <div>
            <h1>
                {{obra.titulo}}
            </h1>
        </div>

    </div>
</template>



<style scoped>

</style>