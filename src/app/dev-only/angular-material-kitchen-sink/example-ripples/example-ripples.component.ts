import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ripples',
  templateUrl: './example-ripples.component.html',
  styleUrls: ['./example-ripples.component.scss']
})
export class ExampleRipplesComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius?: number;
  color?: string;
}
