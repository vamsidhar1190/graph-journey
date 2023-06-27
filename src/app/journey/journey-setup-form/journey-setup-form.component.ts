import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-journey-setup-form',
  templateUrl: './journey-setup-form.component.html',
  styleUrls: ['./journey-setup-form.component.scss']
})
export class JourneySetupFormComponent implements OnInit {
  selectedSetup: string = '';

  constructor(public dialogRef: MatDialogRef<JourneySetupFormComponent>) { }

  ngOnInit(): void {
  }

  selectTrigger(selectValue: string) {
    console.log(selectValue);
    this.dialogRef.close(selectValue);
  }

}
