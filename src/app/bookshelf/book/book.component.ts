import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  onClick() {
    console.log('hi')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
