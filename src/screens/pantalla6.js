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

    // Animacion para revelar la imagen
    tlFinal.from("#final", {
        opacity: 0,
        duration: 20
    });

    // Se oscurece el fondo
    tlFormaciones.to("#overlay-oscuro", {
        opacity: 0.6,
        duration: 3
    }, "<");

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