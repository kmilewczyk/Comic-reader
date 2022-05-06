import { Routes } from '@angular/router'
import { routes as prodRoutes } from './routes.prod'

export const devRoutes = [
  {
    path: 'kitchen-sink',
    loadChildren: () =>
      import('./dev-only/kitchen-sink/kitchen-sink.module').then((m) => m.KitchenSinkModule),
  },
]

export const routes: Routes = [...prodRoutes, ...devRoutes]
