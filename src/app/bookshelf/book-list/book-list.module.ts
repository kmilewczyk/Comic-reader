import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BookListComponent } from './book-list.component'
import { BookListRoutingModule } from './book-list-routing.module'
import { LoaderOverlayModule } from '@app/misc/loader-overlay/loader-overlay.module'
import { BookListDropzoneComponent } from './book-list-dropzone/book-list-dropzone.component'
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { BookComponent } from '../book/book.component'

@NgModule({
  declarations: [BookListComponent, BookListDropzoneComponent, BookComponent],
  imports: [
    CommonModule,
    BookListRoutingModule,
    LoaderOverlayModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class BookListModule {}
