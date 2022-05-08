import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component'

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-example-dialog-dialog',
  templateUrl: './example-dialog-dialog.component.html',
  styleUrls: ['./example-dialog-dialog.component.scss'],
})
export class ExampleDialogDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
