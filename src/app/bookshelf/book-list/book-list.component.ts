import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [
    `
      :host {
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        margin: 0;
      }
    `,
  ],
})
export class BookListComponent implements OnInit {
  constructor() {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}
}
