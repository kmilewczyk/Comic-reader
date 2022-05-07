import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-labaled-slider',
  templateUrl: './example-labaled-slider.component.html',
  styleUrls: ['./example-labaled-slider.component.scss']
})
export class ExampleLabaledSliderComponent {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
