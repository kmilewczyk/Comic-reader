import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkMainRoutingModule } from './kitchen-sink-main-routing.module';
import { KitchenSinkMainComponent } from './kitchen-sink-main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { KitchenSinkNavigationComponent } from './kitchen-sink-navigation/kitchen-sink-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    KitchenSinkMainComponent,
    KitchenSinkNavigationComponent
  ],
  imports: [
    CommonModule,
    KitchenSinkMainRoutingModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  bootstrap: [KitchenSinkMainComponent]
})
export class KitchenSinkMainModule { }
