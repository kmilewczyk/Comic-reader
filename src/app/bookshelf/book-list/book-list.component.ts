import { Breakpoints } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { DeviceService } from '@app/core/_services/device/device.service'
import { map } from 'rxjs'

const colsMap = new Map([
  [Breakpoints.HandsetPortrait, 2],
  [Breakpoints.HandsetLandscape, 4],
  [Breakpoints.TabletPortrait, 3],
  [Breakpoints.TabletLandscape, 4],
  [Breakpoints.WebPortrait, 4],
  [Breakpoints.WebLandscape, 5],
])

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books = Array.from({ length: 20 }, () => 1)

  cols$ = this.device.breakpoints$.pipe(
    map((breakpoint) => (breakpoint ? colsMap.get(breakpoint)! : 3))
  )

  constructor(private device: DeviceService) {}
}
