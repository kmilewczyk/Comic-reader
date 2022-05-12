import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list-routing.module';
import { LoaderOverlayModule } from '@app/misc/loader-overlay/loader-overlay.module';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    LoaderOverlayModule
  ]
})
export class BookListModule { }
