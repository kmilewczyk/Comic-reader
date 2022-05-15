import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavContainerComponent } from './side-nav-container.component';
import { MaterialSideNavComponent } from './material-side-nav/material-side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { ScrollDirectionModule } from '../_directive/scroll-direction/scroll-direction.module';

@NgModule({
  declarations: [
    SideNavContainerComponent,
    MaterialSideNavComponent,
    SideNavComponent,
    TopToolbarComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveComponentModule,
    ScrollDirectionModule
  ],
  exports: [
    SideNavContainerComponent
  ]
})
export class SideNavContainerModule { }
