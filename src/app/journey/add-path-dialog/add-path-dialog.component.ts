import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// import { Journey, Path } from '../types/journey.interface';

@Component({
  selector: 'app-add-path-dialog',
  templateUrl: './add-path-dialog.component.html',
  styleUrls: ['./add-path-dialog.component.scss']
})
export class AddPathDialogComponent {
  // journey!: Journey[];
  form!: FormGroup;
  selectedPath: string = '';
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPathDialogComponent>,
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    // const path: Path = {
    //   type: this.form.value.type,
    //   template: this.form.value.template,
    //   field: this.form.value.field,
    //   value: this.form.value.value,
    //   condition: this.form.value.condition,
    //   duration: this.form.value.duration,
    // };

    // this.journey.paths.push(path);
    // this.journeyService.setJourney(this.journey);
    this.dialogRef.close();
  }





  selectTrigger(selectValue: string) {
    console.log(selectValue);
    this.dialogRef.close(selectValue);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
