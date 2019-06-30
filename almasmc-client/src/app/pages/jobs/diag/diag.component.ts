import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from './dialog-data.model';

@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.css']
})
export class DiagComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
