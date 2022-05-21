import { Component } from '@angular/core';
import { Theme } from '../_enums';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
})
export class AppContainerComponent {
  Theme = Theme;

  constructor() { }
}
