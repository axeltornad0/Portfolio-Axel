<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
//import { router } from '@/router';

import { scrollToSection } from '@/utils/scrollToSection';
import { useRouter } from 'vue-router';

import {
  HouseHeart,
  Palette,
  Fish,

} from 'lucide-vue-next';


const menuItems = [
  {
    label: 'Ilustración',
    href: '#ilustracion',
    onClick: () => scrollToSection('#ilustracion'),
  },
  {
    label: 'Cómic',
    href: '#comic',
    onClick: () => scrollToSection('#comic'),
  },
  {
    label: 'Diseño de personajes',
    href: '#personajes',
    onClick: () => scrollToSection('#personajes'),
  },
  {
    label: 'Diseño gráfico',
    href: '#diseno',
    onClick: () => scrollToSection('#diseno'),
  },
  {
    label: 'Otros',
    href: '#otros',
    onClick: () => scrollToSection('#otros'),
  },
]

const cursorRouter = useRouter();
 
// NUEVO
const irSeccionObras = (hash: string) => {
  cursorRouter.push({
        path: '/portfolio',
        hash: hash
    });
};

</script>

<template>
    <div>
        <nav class="extra-nav bg-blue-50">
            <NavigationMenu>
                <NavigationMenuList >
                
                <NavigationMenuItem >
                    <NavigationMenuLink >
                    <RouterLink to="/">
                        <span class="flex flex-row flex-nowrap">
                            <HouseHeart class="iconos"/>
                            Home
                        </span>
                        
                    </RouterLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger class="bg-blue-50">
                        <span class="flex flex-row flex-nowrap ">
                            <Palette class="iconos"/>
                            Portfolio 
                        </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent class="bg-blue-50">
                    <NavigationMenuItem v-for="item in menuItems" :key="item.label" >
                            <a
                            :href="item.href"
                            @click.prevent="item.onClick ? item.onClick() : null"
                            @click="irSeccionObras(item.href)"
                            >
                                <NavigationMenuLink
                                class="w-25 md:w-40">

                                {{item.label}}
                                </NavigationMenuLink>
                            </a>  
                            </NavigationMenuItem>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <RouterLink to="/about-me">
                        <span class="flex flex-row flex-nowrap">
                            <Fish class="iconos"/>
                            Sobre mí
                        </span>
                        
                        
                    </RouterLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                
                
                </NavigationMenuList>
            </NavigationMenu>

        </nav>
    </div>
</template>


<style scoped>
.extra-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.iconos {
    padding-right: 5px;
    width: 23px;
    height: 100%;
}

</style>