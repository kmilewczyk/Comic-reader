import { animate, state, style, transition, trigger } from '@angular/animations'

export enum HeightCollapsed {
  Collapsed = 'collapsed',
  Expanded = 'expanded',
}

export const heightCollapsed = trigger('appHeightCollapsed', [
  state(HeightCollapsed.Expanded, style({ })),
  state(HeightCollapsed.Collapsed, style({ position: 'unset' })),
  transition(`${HeightCollapsed.Expanded} => ${HeightCollapsed.Collapsed}`, [
    animate('0.2s ease-out', style({ transform: 'translateY(-100%)'})),
  ]),
  transition(`${HeightCollapsed.Collapsed} => ${HeightCollapsed.Expanded}`, [
    style({ transform: 'translateY(-100%)', position: '*', }),
    animate('0.2s ease-in', style({ transform: 'translateY(0%)'})),
  ]),
])
