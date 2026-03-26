import { cargarConversacion, aparecer_barbaro_arquera, desaparecer_barbaro_arquera } from '../utils.js';

// ---PANTALLA 5---

export function pantalla5() {
    // Linea de tiempo para la pantalla1 de guerra
    const tlFormaciones = gsap.timeline({
        scrollTrigger: {
            trigger: ".formaciones",
            start: "top top",
            end: "+=400%",
            scrub: 1,
            pin: true,
            markers: false
        }
    });

    // Animacion para revelar la imagen
    tlFormaciones.from("#formaciones", {
        opacity: 0,
        duration: 10
    });

    aparecer_barbaro_arquera(tlFormaciones); // Aparecer el barbaro y la arquera

    cargarConversacion(tlFormaciones, 20) // Frase 21: arquera

    // Se oscurece el fondo
    tlFormaciones.to("#overlay-oscuro", {
        opacity: 0.6,
        duration: 3
    }, "<");

    tlFormaciones.to("#bruja-izquierda", {
        duration: 40,
        rotation: 360,
        opacity: 1,
        delay: 0.5,
        stagger: 3,
        ease: "sine.out"
    });

    tlFormaciones.to("#gigante-derecha", {
        duration: 40,
        rotation: 360,
        opacity: 1,
        delay: 0.5,
        stagger: 3,
        ease: "sine.out"
    });

    cargarConversacion(tlFormaciones, 21) // Frase 22: bárbaro

    // Desaparecen las 2 imágenes de bruja/gigante
    tlFormaciones.to("#bruja-izquierda", {
        opacity: 0,
        duration: 10
    });

    tlFormaciones.to("#gigante-derecha", {
        opacity: 0,
        duration: 10
    }, "<");

    // Aparece la curandera
    tlFormaciones.to("#curandera", {
        duration: 40,
        rotation: -360,
        opacity: 1,
        delay: 0.5,
        stagger: 10,
        ease: "sine.out"
    });

    cargarConversacion(tlFormaciones, 22) // Frase 23: arquera

    // Desaparece la Curandera
    tlFormaciones.to("#curandera", {
        opacity: 0,
        duration: 10
    }, "<");

    // Aparece la imagen de Bob Esponja
    tlFormaciones.to("#bob_esponja", {
        opacity: 1,
        duration: 20,
        ease: "bounce.out",
        y: -100
    });

    cargarConversacion(tlFormaciones, 23) // Frase 24: bárbaro

    // Desaparece Bob Esponja
    tlFormaciones.to("#bob_esponja", {
        opacity: 0,
        duration: 10
    }, "<");


    // Aparece el hechizo de hielo en el centro
    tlFormaciones.to("#hielo", {
        opacity: 1,
        duration: 20
    }, "<");

    cargarConversacion(tlFormaciones, 24) // Frase 25: arquera

    // Desaparece el hechizo de hielo en el centro
    tlFormaciones.to("#hielo", {
        opacity: 0,
        duration: 20
    }, "<");

    // El fondo vuelve a estar como antes
    tlFormaciones.to("#overlay-oscuro", {
        opacity: 0,
        duration: 2
    }, "<");

    cargarConversacion(tlFormaciones, 25) // Frase 26: bárbaro

    desaparecer_barbaro_arquera(tlFormaciones); // Desaparecer el barbaro y la arquera

    // Transición a la siguiente pantalla
    tlFormaciones.to(".formaciones", {
        opacity: 0,
        scale: 0.95,
        duration: 10
    });
}