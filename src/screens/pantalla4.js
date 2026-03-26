import { cargarConversacion, aparecer_barbaro_arquera, desaparecer_barbaro_arquera } from '../utils.js';

// ---PANTALLA 4---

export function pantalla4() {

    // Linea de tiempo para la Pantalla4 de guerra (clan rival)
    const tlGuerra2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".guerra_screen_2",
            start: "top top",
            end: "+=250%",
            scrub: 1,
            pin: true,
            markers: false
        }
    });

    // Animacion para revelar la imagen
    tlGuerra2.from("#guerra2", {
        opacity: 0,
        duration: 10
    });

    aparecer_barbaro_arquera(tlGuerra2); // Aparecer el barbaro y la arquera

    cargarConversacion(tlGuerra2, 15) // Frase 16: bárbaro

    // Aparece la flecha señalando la aldea rival
    tlGuerra2.fromTo("#flecha-aldea",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" }, "<");

    cargarConversacion(tlGuerra2, 16) // Frase 17: arquera
    cargarConversacion(tlGuerra2, 17) // Frase 18: bárbaro

    // Desaparece la flecha
    tlGuerra2.to("#flecha-aldea", {
        opacity: 0,
        duration: 10
    });

    cargarConversacion(tlGuerra2, 18) // Frase 19: arquera
    cargarConversacion(tlGuerra2, 19) // Frase 20: barbaro

    desaparecer_barbaro_arquera(tlGuerra2); // Desaparecer el barbaro y la arquera

    // Transición a la siguiente pantalla
    tlGuerra2.to(".guerra_screen_2", {
        opacity: 0,
        scale: 0.95,
        duration: 10
    });
}