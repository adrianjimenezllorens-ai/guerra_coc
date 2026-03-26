import { conversaciones } from './conversaciones.js';

// Funcion para cargar el texto en su bocadillo correspondiente
export function cargarConversacion(tl, i) {
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

// Funcion para hacer aparecer al barbaro y a la arquera
export function aparecer_barbaro_arquera(tl) {
  tl.to("#barbaro", {
    opacity: 1,
    x: 20,
    duration: 10
  });

  tl.to("#arquera", {
    opacity: 1,
    x: -20,
    duration: 10
  });
}

// Funcion para hacer desaparecer al barbaro y a la arquera
export function desaparecer_barbaro_arquera(tl) {
  tl.to("#barbaro", {
    opacity: 0,
    duration: 10
  });

  tl.to("#arquera", {
    opacity: 0,
    duration: 10
  });
}

// Funcion para hacer aparecer el fondo oscuro
export function aparecer_fondo_oscuro(tl) {
  tl.to("#overlay-oscuro", {
    opacity: 0.6,
    duration: 3
  }, "<");
}

// Funcion para hacer desaparecer el fondo oscuro
export function desaparecer_fondo_oscuro(tl) {
  tl.to("#overlay-oscuro", {
    opacity: 0,
    duration: 2
  }, "<");
}

// Funcion para revelar la nueva pantalla (imagen)
export function revelar_pantalla_nueva(tl, idPantalla) {

  // Aparecer la pantalla nueva
  tl.from(idPantalla, {
    opacity: 1,
    scale: 1
  });

  // Desaparecer las nubes (ya se ha mostrado la nueva pantalla)
  tl.to("#transicion-nubes", { 
    opacity: 0, 
    duration: 8, 
    ease: "power2.inOut" 
  });
}

// Funcion para desaparecer la pantalla (final de la pantalla)
export function desaparecer_pantalla(tl, idPantalla) {

  // Aparecer las nubes (cambiando de pantalla)
  tl.to("#transicion-nubes", { 
    opacity: 1, 
    duration: 8,
    ease: "power2.inOut" 
  });

  // Desaparece la pantalla
  tl.to(idPantalla, {
    opacity: 0,
    scale: 0.95,
    duration: 0.1
  });
}