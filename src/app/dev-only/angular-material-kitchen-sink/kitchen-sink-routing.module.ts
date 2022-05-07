import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { KitchenSinkComponent } from './kitchen-sink.component'
import { SideBarExampleViewComponent } from './side-bar-example-view/side-bar-example-view.component'

const routes: Routes = [
  { path: '', component: KitchenSinkComponent },
  { path: 'side-bar-example', component: SideBarExampleViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenSinkRoutingModule {}
