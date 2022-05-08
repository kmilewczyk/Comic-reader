import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppContainerComponent } from './app-container.component'
import { SideNavContainerModule } from '../side-nav-container/side-nav-container.module'
import { AppContainerRoutingModule } from './app-container-routing.module'


@NgModule({
  declarations: [AppContainerComponent],
  imports: [CommonModule, AppContainerRoutingModule, SideNavContainerModule],
  exports: [AppContainerComponent]
})
export class AppContainerModule {}
