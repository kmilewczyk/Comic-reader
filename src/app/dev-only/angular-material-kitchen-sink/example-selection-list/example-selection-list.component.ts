import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-selection-list',
  templateUrl: './example-selection-list.component.html',
})
export class ExampleSelectionListComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
