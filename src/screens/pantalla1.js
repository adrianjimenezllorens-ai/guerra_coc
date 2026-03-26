import { revelar_pantalla_nueva, desaparecer_pantalla } from '../utils.js';


// ---PANTALLA 1---

export function pantalla1() {
    // Linea de tiempo para el loading screen
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".loading_screen",
            start: "top top",      // La animación empieza cuando el section llege al top del navegador (arriba del todo)
            end: "+=100%",         // Distancia que hay que scrollear para que termine la animación (altura del section a 150%)
            scrub: 1,              // Hace que la animación se sincronice con el scroll (1 segundo de retraso para suavizar) 
            pin: true,             // Bloquea el section, solo se ejecutan las animaciones dentro de el mientras se va scrolleando
            markers: false
        }
    });

    revelar_pantalla_nueva(tl, "#loading"); // Animacion para revelar la pantalla nueva (imagen)

    // Animacion para mostrar la caja de texto
    tl.to("#caja1 p", {
        opacity: 1,
        y: -20, // Sube un poquito
        duration: 10
    }); 

    // Animacion de nuestros nombres
    tl.to("#autores", {
        opacity: 1,
        y: -10,
        duration: 10
    });

    desaparecer_pantalla(tl, ".loading_screen"); // Desaparecer el loading screen
}