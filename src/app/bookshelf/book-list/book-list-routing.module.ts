import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { BookListComponent } from './book-list.component'

const routes: Route[] = [
  {
    path: '',
    component: BookListComponent,
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookListRoutingModule {};