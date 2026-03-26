import { pantalla1 } from './screens/pantalla1';
import { pantalla2 } from './screens/pantalla2';
import { pantalla3 } from './screens/pantalla3';
import { pantalla4 } from './screens/pantalla4';
import { pantalla5 } from './screens/pantalla5';
import { pantalla6 } from './screens/pantalla6';

// Libreria de scroll
gsap.registerPlugin(ScrollTrigger);

// Iniciar pantallas en orden
pantalla1();
pantalla2();
pantalla3();
pantalla4();
pantalla5();
pantalla6();