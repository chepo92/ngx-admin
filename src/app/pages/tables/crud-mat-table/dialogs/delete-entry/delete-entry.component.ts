import { DataService } from '../../../../../services/data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngx-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.scss']
})
export class DeleteEntryComponent  {

  constructor(public dialogRef: MatDialogRef<DeleteEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteIssue(this.data.id);
  }
}
