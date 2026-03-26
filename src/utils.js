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