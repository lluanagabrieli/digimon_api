import {
  style,
  animate,
  trigger,
  transition,
  query,
  stagger,
} from '@angular/animations';

export let animationCard = trigger('abrirCard', [
  transition('* => *', [
    query('.card', style({ transform: 'translateX(-50%)', opacity: 0.8 })),
    query(
      '.card',
      stagger(500, [animate(500, style({ transform: 'translateX(0)' }))])
    ),
  ]),
]);
