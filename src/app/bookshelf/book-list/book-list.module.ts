import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list-routing.module';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule
  ]
})
export class BookListModule { }
