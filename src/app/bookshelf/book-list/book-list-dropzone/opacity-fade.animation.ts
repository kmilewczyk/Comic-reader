import { animate, state, style, transition, trigger } from '@angular/animations'

export enum OpacityFade {
  Visible = 'visible',
  Hide = 'hide',
}

export const opacityFade = trigger('appOpacityFade', [
  state(
    OpacityFade.Visible,
    style({
      opacity: 1,
    })
  ),
  state(
    OpacityFade.Hide,
    style({
      opacity: 0,
    })
  ),
  transition(`${OpacityFade.Visible} <=> ${OpacityFade.Hide}`, [animate('0.5s')]),
])
