import { animate, state, style, transition, trigger } from '@angular/animations'

export enum OpacityFade {
  Visible = 'visible',
  Hide = 'hide',
}

export const opacityFade = trigger('appOpacityFade', [
  transition(':enter', [style({ opacity: 0 }), animate('0.1s')]),
  transition(':leave', [animate('0.1s'), style({ opacity: 0 })]),
])
