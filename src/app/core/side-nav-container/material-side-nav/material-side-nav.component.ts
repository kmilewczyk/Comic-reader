import { Component, Input } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

@Component({
  selector: 'app-material-side-nav',
  templateUrl: './material-side-nav.component.html',
  styleUrls: ['./material-side-nav.component.scss'],
})
export class MaterialSideNavComponent {
  @Input() sideNavTitle?: string

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
