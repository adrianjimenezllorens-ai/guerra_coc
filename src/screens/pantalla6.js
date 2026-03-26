import { revelar_pantalla_nueva, aparecer_fondo_oscuro } from '../utils.js';


// ---PANTALLA 6---

export function pantalla6() {
    // Linea de tiempo para la pantalla final
    const tlFinal = gsap.timeline({
        scrollTrigger: {
            trigger: ".revelar_final",
            start: "top top",
            end: "+=80%",
            scrub: 1,
            pin: true,
            markers: false
        }
    });

    revelar_pantalla_nueva(tlFinal, "#revelar_final"); // Animacion para revelar la pantalla nueva (imagen)

    aparecer_fondo_oscuro(tlFinal); // Se oscurece el fondo

    // Animacion para mostrar la caja de texto
    tlFinal.to("#caja_final p", {
        opacity: 1,
        y: -20, // Sube un poquito
        duration: 1
    }); 

    // Animacion del texto final
    tlFinal.to("#texto_final", {
        opacity: 1,
        y: -10,
        duration: 0.8
    });

    // Aparece la imagen final
    tlFinal.to("#imagen_final", {
        opacity: 1,
        duration: 80,
        ease: "elastic.out(2,0.3)",
        y: -100
    });
}