import { animate, state, style, transition, trigger } from '@angular/animations'

export enum HeightCollapsed {
  Collapsed = 'collapsed',
  Expanded = 'expanded',
}

export const heightCollapsed = trigger('appHeightCollapsed', [
  state(HeightCollapsed.Expanded, style({ height: '*' })),
  state(HeightCollapsed.Collapsed, style({ height: 0, overflow: 'hidden' })),
  transition(`* => ${HeightCollapsed.Collapsed}`, [animate('1s')]),
])
