import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = Array.from({ length: 20 }, () => 1)

  constructor() {}
}
