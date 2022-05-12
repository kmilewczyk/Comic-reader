import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-load-overlay',
  template: `<mat-spinner></mat-spinner>`,
  styles: [
    `
      :host {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
      }

      mat-spinner {
        margin: auto auto;
      }
    `,
  ],
})
export class LoadOverlayComponent {
  constructor() {}
}
