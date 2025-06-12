import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
  ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true,  // true si tu veux que l'animation rejoue à chaque scroll
    interval: 100,
  });
}
