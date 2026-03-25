import { conversaciones } from './conversaciones.js';

// Funcion para cargar el texto en su bocadillo correspondiente
function cargarConversacion(tl, i) {
  const conversacion = conversaciones[i];

  let bocadillo;
  let texto;

  if (conversacion.personaje === "barbaro") {
    bocadillo = "#bocadillo-barbaro";
    texto = "#texto-barbaro";
  } else if (conversacion.personaje === "arquera") {
    bocadillo = "#bocadillo-arquera";
    texto = "#texto-arquera";
  }

  tl.set(texto, { innerText: conversacion.texto }); // carga el texto del array de conversaciones
  tl.to(bocadillo, { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" }); // hago aparecer el bocadillo correspondiente (barbaro o arquera)
  tl.to({}, { duration: 20 }); // Pausa para leer el texto
  tl.to(bocadillo, { opacity: 0, scale: 0, duration: 10 }); // una vez leido el texto, hago desaparecer el bocadillo del bárbaro
}


// Libreria de scroll
      gsap.registerPlugin(ScrollTrigger);

      // Linea de tiempo para el loading screen
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".revelar_loading_screen",
          start: "top top",      // La animación empieza cuando el section llege al top del navegador (arriba del todo)
          end: "+=80%",         // Distancia que hay que scrollear para que termine la animación (altura del section a 150%)
          scrub: 1,              // Hace que la animación se sincronice con el scroll (1 segundo de retraso para suavizar) 
          pin: true,             // Bloquea el section, solo se ejecutan las animaciones dentro de el mientras se va scrolleando
          markers: false,
          pinSpacing: false
        }
      });

  // Animacion para revelar la imagen
  tl.from("#revelar_loading_screen", {
    opacity: 0,
    duration: 1
  });

  // Animacion para mostrar la caja de texto
  tl.to("#caja1 p", {
    opacity: 1,
    y: -20, // Sube un poquito
    duration: 1
  }); 

  // Animacion de nuestros nombres
  tl.to("#autores", {
    opacity: 1,
    y: -10,
    duration: 0.8
  });

  // Desaparecer el loading screen
  tl.to(".revelar_loading_screen", {  opacity: 0, scale: 0.95, duration: 1 });


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

  // Aparecer el barbaro
  tlAldea.to("#barbaro", {
    opacity: 1,
    x: 20,
    duration: 10
  });

  // Aparecer la arquera
  tlAldea.to("#arquera", {
    opacity: 1,
    x: -20,
    duration: 10
  });

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

// Desaparece el barbaro
  tlAldea.to("#barbaro", {
    opacity: 0,
    duration: 10
  });

  // Desaparece la arquera
  tlAldea.to("#arquera", {
    opacity: 0,
    duration: 10
  });

// Transición a la siguiente pantalla
tlAldea.to(".pantalla2", {
  opacity: 0,
  scale: 0.95,
  duration: 10
});

// Linea de tiempo para la pantalla1 de guerra
const tlGuerra = gsap.timeline({
  scrollTrigger: {
    trigger: ".guerra_screen_1",
    start: "top top",
    end: "+=200%",
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

  // Aparecer el barbaro
  tlGuerra.to("#barbaro", {
    opacity: 1,
    x: 20,
    duration: 10
  });

  // Aparecer la arquera
  tlGuerra.to("#arquera", {
    opacity: 1,
    x: -20,
    duration: 10
  });


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

// Desaparece el barbaro
  tlGuerra.to("#barbaro", {
    opacity: 0,
    duration: 10
  });

  // Desaparece la arquera
  tlGuerra.to("#arquera", {
    opacity: 0,
    duration: 10
  });

// Transición a la siguiente pantalla
tlGuerra.to(".guerra_screen_1", {
  opacity: 0,
  scale: 0.95,
  duration: 10
});

// Linea de tiempo para la pantalla1 de guerra
const tlGuerra2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guerra_screen_2",
    start: "top top",
    end: "+=150%",
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

  // Aparecer el barbaro
  tlGuerra2.to("#barbaro", {
    opacity: 1,
    x: 20,
    duration: 10
  });

  // Aparecer la arquera
  tlGuerra2.to("#arquera", {
    opacity: 1,
    x: -20,
    duration: 10
  });

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

  // Desaparece el barbaro
  tlGuerra2.to("#barbaro", {
    opacity: 0,
    duration: 10
  });

  // Desaparece la arquera
  tlGuerra2.to("#arquera", {
    opacity: 0,
    duration: 10
  });

  // Transición a la siguiente pantalla
tlGuerra2.to(".guerra_screen_2", {
  opacity: 0,
  scale: 0.95,
  duration: 10
});

// Linea de tiempo para la pantalla1 de guerra
const tlFormaciones = gsap.timeline({
  scrollTrigger: {
    trigger: ".formaciones",
    start: "top top",
    end: "+=150%",
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

  // Aparecer el barbaro
  tlFormaciones.to("#barbaro", {
    opacity: 1,
    x: 20,
    duration: 10
  });

  // Aparecer la arquera
  tlFormaciones.to("#arquera", {
    opacity: 1,
    x: -20,
    duration: 10
  });