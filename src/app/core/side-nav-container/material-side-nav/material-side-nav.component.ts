import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core'
import { iif, Observable, of, Subject } from 'rxjs'
import {
  debounceTime,
  distinct,
  filter,
  map,
  mergeAll,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators'
import { DeviceService } from '@app/core/_services/device/device.service'
import { heightCollapsed, HeightCollapsed } from '@app/core/_animations/height-collapsed.animation'
import { Scroll } from '@app/core/_directive/scroll-direction/scroll-direction.directive'
import { ScrollDirectionService } from '@app/core/_directive/scroll-direction/scroll-direction.service'

@Component({
  selector: 'app-material-side-nav',
  templateUrl: './material-side-nav.component.html',
  styleUrls: ['./material-side-nav.component.scss'],
  animations: [heightCollapsed],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSideNavComponent implements AfterViewInit {
  @Input() sideNavTitle?: string

  isHandset$ = this.device.isHandset$

  topToolbarCollapsed$?: Observable<HeightCollapsed>

  constructor(private device: DeviceService, private scrollService: ScrollDirectionService) {
    this.initScrollObservables();
  }

  ngAfterViewInit(): void {
    // this.initScrollObservables();
  }

  private initScrollObservables() {
    const userScrolledDown$ = this.scrollService.scroll$('side-nav-content').pipe(
      map((direction) => direction === Scroll.Down),
      debounceTime(100)
    )

    this.topToolbarCollapsed$ = this.isHandset$.pipe(
      switchMap((isHandset) => iif(() => isHandset, userScrolledDown$, of(false))),
      map((collapsed) => (collapsed ? HeightCollapsed.Collapsed : HeightCollapsed.Expanded)),
      startWith(HeightCollapsed.Expanded),
    )
  }
}
