import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenSinkRoutingModule } from './kitchen-sink-routing.module';
import { KitchenSinkComponent } from './kitchen-sink.component';


@NgModule({
  declarations: [
    KitchenSinkComponent
  ],
  imports: [
    CommonModule,
    KitchenSinkRoutingModule
  ]
})
export class KitchenSinkModule { }
