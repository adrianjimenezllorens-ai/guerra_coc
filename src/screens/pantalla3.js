import { cargarConversacion, aparecer_barbaro_arquera, desaparecer_barbaro_arquera } from '../utils.js';

// ---PANTALLA 3---

export function pantalla3() {
    // Linea de tiempo para la pantalla3 de guerra (clan aliado)
    const tlGuerra = gsap.timeline({
        scrollTrigger: {
            trigger: ".guerra_screen_1",
            start: "top top",
            end: "+=400%",
            scrub: 1,
            pin: true,
            markers: false
        }
    });

    // Animacion para revelar la imagen
    tlGuerra.from("#guerra", {
        opacity: 0,
        duration: 20
    });

    aparecer_barbaro_arquera(tlGuerra); // Aparecer el barbaro y la arquera

    cargarConversacion(tlGuerra, 9); // Frase 10: arquera

    // Aparece la flecha señalando la aldea
    tlGuerra.fromTo("#flecha-aldea",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" }, "<");

    cargarConversacion(tlGuerra, 10); // Frase 11: bárbaro
    cargarConversacion(tlGuerra, 11); // Frase 12: arquera

    // Desaparece la flecha
    tlGuerra.to("#flecha-aldea", {
        opacity: 0,
        duration: 10
    });

    cargarConversacion(tlGuerra, 12); // Frase 13: bárbaro
    cargarConversacion(tlGuerra, 13); // Frase 14: arquera
    cargarConversacion(tlGuerra, 14); // Frase 15: arquera

    desaparecer_barbaro_arquera(tlGuerra); // Desaparecer el barbaro y la arquera

    // Transición a la siguiente pantalla
    tlGuerra.to(".guerra_screen_1", {
        opacity: 0,
        scale: 0.95,
        duration: 10
    });
}