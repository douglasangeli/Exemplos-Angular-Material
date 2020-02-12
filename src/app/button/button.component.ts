import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogOverviewExampleDialogComponent } from '../shared/dialog-overview-example-dialog';
import { BottomSheetOverviewExampleSheetComponent } from '../shared/bottom-sheet-overview-example-sheet';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  message = 'Olá! Obrigado por clicar...';
  action = 'Ok';

  ngOnInit() {
  }

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: 'teste'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

}


