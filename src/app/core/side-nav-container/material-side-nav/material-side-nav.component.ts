import { Component, Input } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { DeviceService } from '@app/core/_services/device/device.service'

@Component({
  selector: 'app-material-side-nav',
  templateUrl: './material-side-nav.component.html',
  styleUrls: ['./material-side-nav.component.scss'],
})
export class MaterialSideNavComponent {
  @Input() sideNavTitle?: string

  isHandset$ = this.device.isHandset$;

  constructor(private device: DeviceService) {}
}
