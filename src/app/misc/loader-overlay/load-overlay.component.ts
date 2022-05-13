import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-load-overlay',
  template: `<mat-spinner></mat-spinner>`,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      app-load-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        box-shadow: 0px 0px 10px 1px grey;

        mat-spinner {
          position: absolute !important;
          height: 100% !important;
          max-height: 100px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);

          svg {
            height: 100% !important;
          }
        }
      }
    `,
  ],
})
export class LoadOverlayComponent {
  constructor() {}
}
