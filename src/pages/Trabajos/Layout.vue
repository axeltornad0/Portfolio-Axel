<script setup lang="ts">
import { X } from 'lucide-vue-next';
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
    <div class="bg-black">
        <header class="flex items-center justify-end">
            <Button variant="exit" class="scale-100 lg:scale-130 m-10 mb-[-50px]" size="exit">
                <RouterLink to="/portfolio">
                    <X />
                </RouterLink>
            </Button>
        </header>

        <main>
            <RouterView />


        </main>



    </div>
</template>



<style scoped>

</style>