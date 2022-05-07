import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ExampleDialogDialogComponent } from '../example-dialog-dialog/example-dialog-dialog.component'

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
})
export class ExampleDialogComponent {
  animal?: string
  name?: string

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialogDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed')
      this.animal = result
    })
  }
}
