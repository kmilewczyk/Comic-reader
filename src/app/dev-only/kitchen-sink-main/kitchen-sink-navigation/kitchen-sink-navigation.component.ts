import { Component, ElementRef, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-kitchen-sink-navigation',
  templateUrl: './kitchen-sink-navigation.component.html',
  styleUrls: ['./kitchen-sink-navigation.component.scss']
})
export class KitchenSinkNavigationComponent {
  @Input() content?: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
