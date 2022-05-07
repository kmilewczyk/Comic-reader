import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss']
})
export class BadgeExampleComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
