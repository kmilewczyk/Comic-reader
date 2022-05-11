import { Routes } from '@angular/router';
import { AppContainerComponent } from './core/app-container/app-container.component';
import { AppContainerModule } from './core/app-container/app-container.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => AppContainerModule
  },
]
