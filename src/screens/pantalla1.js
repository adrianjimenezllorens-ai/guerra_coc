// ---PANTALLA 1---

export function pantalla1() {
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
    tl.to(".revelar_loading_screen", {  
        opacity: 0, 
        scale: 0.95, 
        duration: 1 
    });
}