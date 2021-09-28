import { Issue } from '../../../../models/issue';
import { DataService } from '../../../../services/data.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
// import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';
// import {Issueue} from '../../models/issue';

@Component({
  selector: 'ngx-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent {


  constructor(public dialogRef: MatDialogRef<AddEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Issue,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }
}

