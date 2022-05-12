import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
})
export class BookListComponent implements OnInit {

  constructor() {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void { }
}
