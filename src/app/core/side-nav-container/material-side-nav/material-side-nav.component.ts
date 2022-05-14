import { Component, Input } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { EMPTY, Observable, of } from 'rxjs'
import { map, shareReplay, switchMap } from 'rxjs/operators'
import { DeviceService } from '@app/core/_services/device/device.service'
import { heightCollapsed, HeightCollapsed } from '@app/core/_animations/height-collapsed.animation'

@Component({
  selector: 'app-material-side-nav',
  templateUrl: './material-side-nav.component.html',
  styleUrls: ['./material-side-nav.component.scss'],
  animations: [heightCollapsed],
})
export class MaterialSideNavComponent {
  @Input() sideNavTitle?: string

  isHandset$ = this.device.isHandset$

  topToolbarCollapsed$ = this.isHandset$.pipe(
    switchMap((isHandset) =>
      isHandset ? of(HeightCollapsed.Collapsed) : of(HeightCollapsed.Expanded)
    )
  )

  constructor(private device: DeviceService) {}
}
