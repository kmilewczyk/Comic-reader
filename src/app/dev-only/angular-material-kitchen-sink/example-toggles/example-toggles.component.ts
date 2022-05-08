import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-example-toggles',
  templateUrl: './example-toggles.component.html',
  styleUrls: ['./example-toggles.component.scss']
})
export class ExampleTogglesComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
