import { Component, OnInit } from '@angular/core'
import { MatBottomSheetRef } from '@angular/material/bottom-sheet'

@Component({
  selector: 'app-bottom-sheet-overview-example',
  templateUrl: './bottom-sheet-overview-example.component.html',
  styleUrls: ['./bottom-sheet-overview-example.component.scss'],
})
export class BottomSheetOverviewExampleComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss()
    event.preventDefault()
  }
}
