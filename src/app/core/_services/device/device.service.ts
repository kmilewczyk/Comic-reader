import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Injectable } from '@angular/core'
import { map, Observable, shareReplay, tap } from 'rxjs'

export enum DeviceType {
  Handset,
  Tablet,
  Web,
  Unknown,
}

const breakPointMap = new Map([
  [Breakpoints.HandsetPortrait, DeviceType.Handset],
  [Breakpoints.HandsetLandscape, DeviceType.Handset],
  [Breakpoints.TabletPortrait, DeviceType.Tablet],
  [Breakpoints.TabletLandscape, DeviceType.Tablet],
  [Breakpoints.WebPortrait, DeviceType.Web],
  [Breakpoints.WebLandscape, DeviceType.Web],
])

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private readonly deviceMap$ = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
    .pipe(shareReplay())

  readonly breakpoints$ = this.deviceMap$.pipe(
    map((result) => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) return query
      }

      return undefined
    }),
    shareReplay()
  )

  readonly deviceType$ = this.breakpoints$.pipe(
    map((result) => (result ? breakPointMap.get(result)! : DeviceType.Unknown)),
    shareReplay()
  )

  readonly isHandset$ = this.is$(DeviceType.Handset)
  readonly isTablet$ = this.is$(DeviceType.Tablet)
  readonly isWeb$ = this.is$(DeviceType.Web)

  constructor(private breakpointObserver: BreakpointObserver) {}

  private is$(type: DeviceType): Observable<boolean> {
    return this.deviceType$.pipe(
      map((device) => device === type),
      shareReplay()
    )
  }
}
