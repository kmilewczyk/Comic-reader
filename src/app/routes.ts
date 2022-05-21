import { Routes } from '@angular/router'
import { routes as prodRoutes } from './routes.prod'

export const devRoutes = [
  {
    path: 'kitchen-sink',
    loadChildren: () =>
      import('@app/dev-only/kitchen-sink-main/kitchen-sink-main.module').then((m) => m.KitchenSinkMainModule),
  },
]

export const routes: Routes = [...devRoutes, ...prodRoutes]
