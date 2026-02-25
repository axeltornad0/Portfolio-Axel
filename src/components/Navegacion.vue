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
import { scrollToSection } from '@/utils/scrollToSection';

interface MenuItems {
    label: string,
    href: string,
    onClick?: () => void
}

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
    label: 'Diseño gráfico',
    href: '#diseno',
    onClick: () => scrollToSection('#diseno'),
  },
]
</script>

<template>
    <div>
        <nav class="extra-nav">
            <NavigationMenu>
                <NavigationMenuList>
                
                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <RouterLink to="/">
                        Home
                    </RouterLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Trabajos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <NavigationMenuItem v-for="item in menuItems" :key="item.label">
                            <a
                            :href="item.href"
                            @click.prevent="item.onClick ? item.onClick() : null"
                            >
                                <NavigationMenuLink>
                                <!-- mezcla de la clase que me da  -->
                                {{item.label}}
                                </NavigationMenuLink>
                            </a>  
                            </NavigationMenuItem>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <RouterLink to="/about-me">
                        Sobre mí
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
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

</style>