import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { SideNavContainerComponent } from '../side-nav-container/side-nav-container.component'
import { AppContainerComponent } from './app-container.component'

const routes: Route[] = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        loadChildren: () =>
          import('@app/bookshelf/book-list/book-list.module').then((m) => m.BookListModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppContainerRoutingModule {}
