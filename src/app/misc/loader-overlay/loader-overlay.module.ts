import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOverlayDirective } from './load-overlay.directive';
import { LoadOverlayComponent } from './load-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    LoadOverlayDirective,
    LoadOverlayComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoadOverlayDirective
  ]
})
export class LoaderOverlayModule { }
