import { ref } from "vue"

interface Coordinatas {
  x: number,
  y: number,
}

export const useMouseMotion = () => {
    const mousePosition = ref<Coordinatas>({x:0, y:0})

    const mouseMove = (event: MouseEvent) => {
   
        const rect = (event.target as HTMLElement).getBoundingClientRect()
        //esta funcion me da el rectangulo sobre el que me muevo

        const centerX = rect.width/2
        const centerY = rect.height/2

        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top

        mousePosition.value = {
            x: (centerX-mouseX) * 0.1,
            y: (centerY-mouseY) * 0.3
        }
    }

    const mouseLeave = () => {
    mousePosition.value={x:0,y:0}
    }

    return {
        mousePosition,
        mouseLeave,
        mouseMove,
    }
}