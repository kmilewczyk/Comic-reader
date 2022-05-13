import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-load-overlay',
  template: `<mat-spinner></mat-spinner>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./load-overlay.component.scss"]
})
export class LoadOverlayComponent {
  constructor() {}
}
