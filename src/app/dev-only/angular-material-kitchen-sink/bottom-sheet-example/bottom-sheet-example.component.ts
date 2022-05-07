import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleComponent } from '../bottom-sheet-overview-example/bottom-sheet-overview-example.component';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'app-bottom-sheet-example',
  templateUrl: 'bottom-sheet-example.component.html',
})
export class BottomSheetExampleComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleComponent);
  }
}