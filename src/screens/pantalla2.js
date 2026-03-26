import { cargarConversacion, aparecer_barbaro_arquera, desaparecer_barbaro_arquera } from '../utils.js';

// ---PANTALLA 2---

export function pantalla2() {
    
    // Linea de tiempo para la aldea
    const tlAldea = gsap.timeline({
        scrollTrigger: {
            trigger: ".pantalla2",
            start: "top top",      // La animación empieza cuando el section llege al top del navegador (arriba del todo)
            end: "+=500%",         // Distancia que hay que scrollear para que termine la animación (altura del section a 150%)
            scrub: 1,              // Hace que la animación se sincronice con el scroll (1 segundo de retraso para suavizar) 
            pin: true,             // Bloquea el section, solo se ejecutan las animaciones dentro de el mientras se va scrolleando
            markers: false
        }
    });

    // Animacion para revelar la imagen
    tlAldea.from("#aldea", {
        opacity: 0,
        duration: 20,
    });

    aparecer_barbaro_arquera(tlAldea); // Aparecer el barbaro y la arquera

    // Frase 1: bárbaro
    cargarConversacion(tlAldea, 0); // cargo la primera conversacion del array de conversaciones (bárbaro) y así sucesivamente con el resto de conversaciones
    cargarConversacion(tlAldea, 1); // Frase 2: arquera
    cargarConversacion(tlAldea, 2); // Frase 3: bárbaro
    cargarConversacion(tlAldea, 3); // Frase 4: arquera
    cargarConversacion(tlAldea, 4); // Frase 5: bárbaro

    // Se oscurece el fondo
    tlAldea.to("#overlay-oscuro", {
        opacity: 0.6,
        duration: 3
    }, "<");

    // Aparece el dragón eléctrico en el centro
    tlAldea.to("#dragon-electrico", {
        opacity: 1,
        duration: 20
    }, "<");

    cargarConversacion(tlAldea, 5); // Frase 6: arquera
    cargarConversacion(tlAldea, 6); // Frase 7: bárbaro

    // Desaparece el dragón eléctrico
    tlAldea.to("#dragon-electrico", {
        opacity: 0,
        duration: 10
    });

    // Aparecen las 3 imágenes de mejoras
    tlAldea.to("#mejora-izquierda", {
        opacity: 1,
        duration: 10
    });

    tlAldea.to("#mejora-centro", {
        opacity: 1,
        duration: 10
    }, "<");

    tlAldea.to("#mejora-derecha", {
        opacity: 1,
        duration: 10
    }, "<");

    cargarConversacion(tlAldea, 7); // Frase 8: arquera

    // El fondo vuelve a estar como antes
    tlAldea.to("#overlay-oscuro", {
        opacity: 0,
        duration: 2
    }, "<");

    cargarConversacion(tlAldea, 8); // Frase 9: bárbaro

    tlAldea.to({}, { duration: 10 });

    // Desaparecen las 3 imágenes de mejoras
    tlAldea.to("#mejora-izquierda", {
        opacity: 0,
        duration: 10
    });

    tlAldea.to("#mejora-centro", {
        opacity: 0,
        duration: 10
    }, "<");

    tlAldea.to("#mejora-derecha", {
        opacity: 0,
        duration: 10
    }, "<");

    desaparecer_barbaro_arquera(tlAldea);  // Desaparecer el barbaro y la arquera

    // Transición a la siguiente pantalla
    tlAldea.to(".pantalla2", {
        opacity: 0,
        scale: 0.95,
        duration: 10
    });
}
