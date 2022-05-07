import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { KitchenSinkMainComponent } from './kitchen-sink-main.component'

const routes: Routes = [
  {
    path: '',
    component: KitchenSinkMainComponent,
    children: [
      {
        path: 'material',
        loadChildren: () =>
          import('@app/dev-only/angular-material-kitchen-sink/kitchen-sink.module').then(
            (m) => m.AngularKitchenSinkModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenSinkMainRoutingModule {}
