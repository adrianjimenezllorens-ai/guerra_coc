import { conversaciones } from './conversaciones.js';

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
  tlAldea.to("#imagen-izquierda", {
    opacity: 1,
    x: 20,
    duration: 4
  });

  // Aparecer la arquera
  tlAldea.to("#imagen-derecha", {
    opacity: 1,
    x: -20,
    duration: 4
  });

 // Frase 1: bárbaro
tlAldea.set("#texto-barbaro", { innerText: conversaciones[0].texto }); // carga el texto 1 del array de conversaciones
tlAldea.to("#bocadillo-barbaro", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" }); // hago aparecer el bocadillo del bárbaro
tlAldea.to({}, { duration: 20 }); // Pausa para leer el texto
tlAldea.to("#bocadillo-barbaro", { opacity: 0, scale: 0, duration: 10 }); // una vez leido el texto, hago desaparecer el bocadillo del bárbaro

// Frase 2: arquera
tlAldea.set("#texto-arquera", { innerText: conversaciones[1].texto }); 
tlAldea.to("#bocadillo-arquera", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlAldea.to({}, { duration: 20 });
tlAldea.to("#bocadillo-arquera", { opacity: 0, scale: 0, duration: 10 });

// Frase 3: bárbaro
tlAldea.set("#texto-barbaro", { innerText: conversaciones[2].texto });
tlAldea.to("#bocadillo-barbaro", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlAldea.to({}, { duration: 20 });
tlAldea.to("#bocadillo-barbaro", { opacity: 0, scale: 0, duration: 10 });

// Frase 4: arquera
tlAldea.set("#texto-arquera", { innerText: conversaciones[3].texto });
tlAldea.to("#bocadillo-arquera", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlAldea.to({}, { duration: 20 });
tlAldea.to("#bocadillo-arquera", { opacity: 0, scale: 0, duration: 10 });

// Frase 5: bárbaro
tlAldea.set("#texto-barbaro", { innerText: conversaciones[4].texto });
tlAldea.to("#bocadillo-barbaro", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });

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

tlAldea.to({}, { duration: 2 });
tlAldea.to("#bocadillo-barbaro", { opacity: 0, scale: 0, duration: 2 });

// Frase 6: arquera
tlAldea.set("#texto-arquera", { innerText: conversaciones[5].texto });
tlAldea.to("#bocadillo-arquera", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlAldea.to({}, { duration: 20 });
tlAldea.to("#bocadillo-arquera", { opacity: 0, scale: 0, duration: 10 });

// Frase 7: bárbaro
tlAldea.set("#texto-barbaro", { innerText: conversaciones[6].texto });
tlAldea.to("#bocadillo-barbaro", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlAldea.to({}, { duration: 20 });
tlAldea.to("#bocadillo-barbaro", { opacity: 0, scale: 0, duration: 10 });

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

// Frase 8: arquera
tlAldea.set("#texto-arquera", { innerText: conversaciones[7].texto });
tlAldea.to("#bocadillo-arquera", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlAldea.to({}, { duration: 20 });
tlAldea.to("#bocadillo-arquera", { opacity: 0, scale: 0, duration: 10 });

// El fondo vuelve a estar como antes
tlAldea.to("#overlay-oscuro", {
  opacity: 0,
  duration: 2
}, "<");

// Frase 9: bárbaro (transición final)
tlAldea.set("#texto-barbaro", { innerText: conversaciones[8].texto });
tlAldea.to("#bocadillo-barbaro", { 
  opacity: 1, 
  scale: 1, 
  duration: 10, 
  ease: "back.out(1.7)" 
});

tlAldea.to({}, { duration: 10 });

// Desaparece el bocadillo
tlAldea.to("#bocadillo-barbaro", { 
  opacity: 0, 
  scale: 0, 
  duration: 10
});

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
  tlAldea.to("#imagen-izquierda", {
    opacity: 0,
    duration: 4
  });

  // Desaparece la arquera
  tlAldea.to("#imagen-derecha", {
    opacity: 0,
    duration: 4
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
    end: "+=150%",
    scrub: 1,
    pin: true,
    markers: false
  }
});

// Animacion para revelar la imagen
tlGuerra.from("#guerra", {
  opacity: 0,
  duration: 10
});

  // Aparecer el barbaro
  tlGuerra.to("#imagen-izquierda-guerra", {
    opacity: 1,
    x: 20,
    duration: 4
  });

  // Aparecer la arquera
  tlGuerra.to("#imagen-derecha-guerra", {
    opacity: 1,
    x: -20,
    duration: 4
  });

// Frase 1: arquera
tlGuerra.set("#texto-arquera-guerra", { innerText: conversaciones[9].texto });
tlGuerra.to("#bocadillo-arquera-guerra", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlGuerra.to({}, { duration: 20 });
tlGuerra.to("#bocadillo-arquera-guerra", { opacity: 0, scale: 0, duration: 10 });

// Aparece la flecha señalando la aldea
tlGuerra.fromTo("#flecha-aldea",
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" }, "<");

// Frase 2: bárbaro
tlGuerra.set("#texto-barbaro-guerra", { innerText: conversaciones[10].texto });
tlGuerra.to("#bocadillo-barbaro-guerra", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlGuerra.to({}, { duration: 20 });
tlGuerra.to("#bocadillo-barbaro-guerra", { opacity: 0, scale: 0, duration: 10 });

// Frase 3: arquera
tlGuerra.set("#texto-arquera-guerra", { innerText: conversaciones[11].texto });
tlGuerra.to("#bocadillo-arquera-guerra", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlGuerra.to({}, { duration: 20 });
tlGuerra.to("#bocadillo-arquera-guerra", { opacity: 0, scale: 0, duration: 10 });

// Desaparece la flecha
tlGuerra.to("#flecha-aldea", {
  opacity: 0,
  duration: 10
});

// Frase 4: bárbaro
tlGuerra.set("#texto-barbaro-guerra", { innerText: conversaciones[12].texto });
tlGuerra.to("#bocadillo-barbaro-guerra", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlGuerra.to({}, { duration: 1 });
tlGuerra.to("#bocadillo-barbaro-guerra", { opacity: 0, scale: 0, duration: 10 });

// Frase 5: arquera
tlGuerra.set("#texto-arquera-guerra", { innerText: conversaciones[13].texto });
tlGuerra.to("#bocadillo-arquera-guerra", { opacity: 1, scale: 1, duration: 10, ease: "back.out(1.7)" });
tlGuerra.to({}, { duration: 20 });
tlGuerra.to("#bocadillo-arquera-guerra", { opacity: 0, scale: 0, duration: 10 });


// Desaparece el barbaro
  tlGuerra.to("#imagen-izquierda", {
    opacity: 0,
    duration: 4
  });

  // Desaparece la arquera
  tlGuerra.to("#imagen-derecha", {
    opacity: 0,
    duration: 4
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