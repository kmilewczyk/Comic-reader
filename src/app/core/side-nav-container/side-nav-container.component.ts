import { Component } from '@angular/core'

@Component({
  selector: 'app-side-nav-container',
  template: `<app-material-side-nav>
    <app-nav-list side-nav></app-nav-list>
    <app-top-toolbar top-toolbar></app-top-toolbar>
    <ng-content></ng-content>
  </app-material-side-nav>`,
})
export class SideNavContainerComponent {}
