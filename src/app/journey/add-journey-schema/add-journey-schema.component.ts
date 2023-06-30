import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddPathDialogComponent } from '../add-path-dialog/add-path-dialog.component';
import { Action, JourneySchema, Node } from 'src/app/interfaces/node';
import { from } from 'rxjs';
import { MergedNode } from '@swimlane/ngx-graph';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-journey-schema',
  templateUrl: './add-journey-schema.component.html',
  styleUrls: ['./add-journey-schema.component.scss'],
})
export class AddJourneySchemaComponent implements OnInit {
  form!: FormGroup;
  selectedPath: string = '';
  journeySchema!: JourneySchema;
  nodeData: Node[] = [];
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddPathDialogComponent>
  ) {}
  selectedData: any;
  selectedValue: string = '';

  formData: any = {};


  ngOnInit() {
    console.log('dfdfdfd sddddd', this.data);
    // this.journey = this.journeyService.getJourneys();
    console.log('from graph componet', this.data);
    if (this.data.data.target.innerText === 'Trigger') {
      this.form = this.fb.group({
        contactModel: [''],
        status: ['', Validators.required],
        trigger: [''],
        triggerValue: [''],
      });
    } else if (this.data.data.target.innerText === 'Action') {
      // this.journey = this.journeyService.getJourneys();
      this.form = this.fb.group({
        // type: ['action', Validators.required],
        template: ['', Validators.required],
        field: [''],
        value1: [''],
        // condition: [''],
        // duration: [''],
      });
    } else if (this.data.data.target.innerText === 'Condition') {
      // this.journey = this.journeyService.getJourneys();
      this.form = this.fb.group({
        // type: ['action', Validators.required],
        comparator: [''],
        value2: [''],
        condition: [''],
      });
    } else {
      this.form = this.fb.group({
        date: [''],
        duration: [''],
      });
    }
  }

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // datavalues=new FormControl('')

  // onSubmit() {
  //   // console.log(this.form.value);
  //   let node: Node;
  //   this.dialogRef.close(this.form.value);
  //   if (this.data.data.target.innerText === 'Trigger') {
  //     const journey: JourneySchema = {
  //       contactModel: this.form.value.contactModel,
  //       status: this.form.value.status,
  //       trigger: this.form.value.trigger,
  //       triggerValue: this.form.value.triggerValue,
  //       nodes: [
  //         // Array of Node objects if needed
  //       ],
  //     };

  //     this.journeySchema = journey;
  //     // this.journeySchema.status = journey.status;
  //     // this.journeySchema.trigger = journey.trigger;
  //     // this.journeySchema.triggerValue = journey.triggerValue;
  //     // this.journeySchema.nodes = journey.nodes;

  //     console.log('Schema data', this.journeySchema);
  //     this.dialogRef.close(this.journeySchema);
  //     localStorage.setItem('data', JSON.stringify(this.journeySchema));
  //   } else {
  //     if (this.data.data.target.innerText === 'Action') {
  //       const data: any = localStorage.getItem('data');
  //       const data1 = JSON.parse(data);
  //       console.log('local data', data1);
  //       node = {
  //         id: this.data.node.id,
  //         nextTrue: this.data.node.id,
  //         action: {
  //           target: this.data.node.id,
  //           field: this.form.value.field,
  //           targetType: this.form.value.template,
  //           value: this.form.value.value1,
  //         },
  //       };

  //       // this.nodeData.push(node)

  //       // data1.nodes.push(node);
  //       const isDuplicate = data1.nodes.some(
  //         (existingNode: any) => existingNode.id === node.id
  //       );

  //       if (!isDuplicate) {
  //         // this.nodeData.push(node);
  //         data1.nodes.push(node);
  //       }
  //       localStorage.setItem('data', JSON.stringify(data1));

  //       // }

  //       console.log('after data action ', data1);
  //       this.dialogRef.close(data1);
  //     } else if (this.data.data.target.innerText === 'Condition') {
  //       const data: any = localStorage.getItem('data');
  //       const data1 = JSON.parse(data);
  //       console.log('local data', data1);
  //       node = {
  //         id: this.data.node.id,
  //         conditions: [
  //           {
  //             condition: this.form.value.condition,
  //             comparator: this.form.value.comparator,
  //             value: this.form.value.value2,
  //           },
  //         ],
  //       };

  //       // this.nodeData.push(node)

  //       // console.log(data1);
  //       // data1.nodes.push(node);
  //       // Check if the node already exists
  //       const isDuplicate = data1.nodes.some(
  //         (existingNode: any) => existingNode.id === node.id
  //       );

  //       if (!isDuplicate) {
  //         // this.nodeData.push(node);
  //         data1.nodes.push(node);
  //       }
  //       localStorage.setItem('data', JSON.stringify(data1));

  //       this.dialogRef.close(data1);

  //       console.log('after data condition', data1);
  //       this.dialogRef.close(data1);
  //     } else {
  //       const data: any = localStorage.getItem('data');
  //       const data1 = JSON.parse(data);
  //       console.log('local data', data1);
  //       node = {
  //         id: this.data.node.id,
  //         date: this.form.value.date,
  //         duration: this.form.value.duration,
  //       };

  //       // this.nodeData.push(node)

  //       // console.log(data1);
  //       // data1.nodes.push(node);
  //       // Check if the node already exists
  //       const isDuplicate = data1.nodes.some(
  //         (existingNode: any) => existingNode.id === node.id
  //       );

  //       if (!isDuplicate) {
  //         // this.nodeData.push(node);
  //         data1.nodes.push(node);
  //       }
  //       localStorage.setItem('data', JSON.stringify(data1));

  //       this.dialogRef.close(data1);

  //       console.log('after data condition', data1);
  //       this.dialogRef.close(data1);
  //     }
  //   }
  // }


  onSubmit() {
    const targetInnerText = this.data.data.target.innerText;
    
    if (targetInnerText === 'Action') {
      const formData = {
        field: this.form.value.field,
        template: this.form.value.template,
        value1: this.form.value.value1
      };
      
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log(formData);
    } else if (targetInnerText === 'Condition') {
      const formDatas={
        comparator: this.form.value.comparator,
        value2: this.form.value.value2,
        condition:this.form.value.condition,
      };
      localStorage.setItem('condition',JSON.stringify(formDatas))
      console.log(formDatas);
      
      } else if (targetInnerText === 'Delay') {
      const FormsData={
        date: this.form.value.date,
        duration: this.form.value.duration,       
      }
      localStorage.setItem('delay',JSON.stringify(FormsData))
      console.log(FormsData); 
    }
    this.dialogRef.close()
    
  }
  



  

  onCancel() {
    this.dialogRef.close();
  }
}
