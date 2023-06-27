// import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
// import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
// import { Edge, Layout, NodePosition } from '@swimlane/ngx-graph';
// import { JourneySetupFormComponent } from '../journey-setup-form/journey-setup-form.component';
// import { AddPathDialogComponent } from '../add-path-dialog/add-path-dialog.component';
// import { Subject } from 'rxjs';
// import { AddJourneySchemaComponent } from '../add-journey-schema/add-journey-schema.component';
// import { JourneySchema, MergedNode, Node } from 'src/app/interfaces/node';
// import { DagreNodesOnlyLayout } from '../journey-graph/customStepCurved';

// @Component({
//   selector: 'app-graph',
//   templateUrl: './graph.component.html',
//   styleUrls: ['./graph.component.scss'],
//   providers: [MatDialog]
// })
// export class GraphComponent implements OnInit {

//   center$: Subject<boolean> = new Subject();
//   panToNode$: Subject<string | null> = new Subject();

//   journeyData!: string;
//   journeyData1!: string;
//   triggerData!: JourneySchema;
//   actionData: any = [];
//   initText!: string;

//   // public curve: any = stepRoundAfter;


//   selectedParentNode: any;
//   layoutSettings = {
//     orientation: 'TB'
//   };

//   buttonDisabled1 = false;
//   buttonDisabled2 = false;

//   public layout: Layout = new DagreNodesOnlyLayout();

//   public attr = { transform: 'translate(500, 70)' };

//   color: string = '';
//   icon: string = '';
//   title: string = '';
//   addBtn: boolean = true;
//   t1: number = 500;
//   t2: number = 70;

//   newNodePosition: { x: number, y: number } = { x: 500, y: 70 };


//   constructor(private chRef: ChangeDetectorRef, private dialog: MatDialog) { }

//   ngOnInit(): void {
//     this.centerGraph();
//     localStorage.setItem('data', '')

//     const data: any = localStorage.getItem('data');

//     this.actionData = JSON.parse(data);


//     this.nodes = [...this.nodes];
//   }
//   processedTargetTypes: string[] = [];

//   getUniqueIdentifier(index: number, data: any): string {
//     console.log('track', data);
//     return data.action.targetType;
//   }
//   centerGraph() {
//     this.center$.next(true);
//     this.panToNode$.next(null); // Center all nodes by passing null

//   }



//   public addSchema(node: any, data: any): void {
//     console.log('shhh', data.target.innerText);
//     console.log('shhh ffdff', node);
//     // this.initText = data.target.innerText;
//     const dialogConfig = new MatDialogConfig();

//     dialogConfig.panelClass = 'center-dialog';
//     const dialogRef: MatDialogRef<AddJourneySchemaComponent> = this.dialog.open(AddJourneySchemaComponent, {
//       data: { data: data, node: node },
//       width: '400px',
//       position: { 'left': '10px' },
//       hasBackdrop: false
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       const data: any = localStorage.getItem('data');
//       this.actionData = JSON.parse(data);



//       // const unique2 = this.actionData.nodes.filter((obj: any, index: any) => {
//       //   return index === this.actionData.nodes.findIndex((o: any) => obj.id === o.id && obj.name === o.name);
//       // });




//       // console.log('dublicate data', unique2)
//       // if (this.journeyData === 'Trigger') {
//       this.journeyData = 'Trigger';
//       this.journeyData1 = '';
//       // this.triggerData = result
//       // this.actionData = result;
//       console.log('after close jou', this.triggerData);
//       // } else {




//       console.log('after close acccth', data);

//       // }


//     })
//   }
//   schema: JourneySchema = {
//     contactModel: "Recruit",
//     status: "draft",
//     trigger: "stage_changed",
//     triggerValue: 3,
//     nodes: [
//       {
//         id: "1",
//         type: "condition",
//         position: { x: 500, y: 70 },
//         conditions: [
//           {
//             type: "field_value",
//             condition: "email",
//             comparator: "ne",
//             value: null
//           },
//           {
//             type: "field_value",
//             condition: "email_unsubscribed",
//             comparator: "ne",
//             value: true
//           },
          
//         ],
//         nextTrue: "2",
//         nextFalse: "3"
        
//       },
//       {
//         id: "2",
//         type: "action",
       
//         action: {
//           type: "send_email",
//           targetType: "Template",
//           target: {
//             id: "oid_89324892394432",
//             subject: "More info on our office",
//             message: "<div><p>{{firstName}} here is the info you requested.</p></div>"
//           }
//         },
//         nextTrue: "4"
//       },
//       {
//         id: "3",
//         type: "condition",
//         conditions: [
//           {
//             type: "field_value",
//             condition: "sms_unsubscribed",
//             comparator: "ne",
//             value: true
//           }
//         ],
//         nextTrue: "9",
//         nextFalse: "8"
//       },
//       {
//         id: "4",
//         type: "delay",
//         delay: {
//           type: "days_away",
//           value: "1"
//         },
//         nextTrue: "5"
//       },
//       {
//         id: "5",
//         type: " condition",
//         conditions: [
//           {
//             type: "event",
//             condition: "opened_email",
//             value: "oid_89324892394432"
//           }
//         ],
//         nextTrue: "6",
//         nextFalse: "7"
//       },
//       {
//         id: "6",
//         type: "action",
//         action: {
//           type: "send_email",
//           targetType: "Template",
//           target: {
//             _id: "oid_98573878329324",
//             subject: "Let's Discuss Your Options",
//             message: " <div><p>{{firstName}} here is the info you requested.</p></div>"
//           }
//         },
//         nextTrue: "8"
//       },
//       {
//         id: "7",
//         type: "action",
//         action: {
//           type: "send_email",
//           targetType: "Template",
//           target: {
//             _id: "oid_95473473482",
//             subject: "Reasons Agents Join",
//             message: "<div><p>{{firstName}} here is the info you requested.</p></div>"
//           }
//         },
//         nextTrue: "8"
//       },
//       {
//         id: "8",
//         type: " action",
//         action: {
//           type: "create_reminder",
//           value: {
//             subject: "Follow Up",
//             dueDate: 2,
//             user: "oid_342784352672"
//           }
//         },
//         nextTrue: null
//       },
//       {
//         id: "1",
//         type: " action",
//         action: {
//           type: "send_sms",
//           targetType: "Template",
//           target: {
//             _id: "oid_9857432342342423",
//             message: " Hello {{firstName}}, learn more about us the the following link. https://google.com"
//           }
//         },
//         nextTrue: "8"
//       }
//     ]
//   }




//   nodes = this.schema.nodes as Node[];//[
//   // Define your initial nodes here
//   // {
//   //   id: 'first',
//   //   label: 'Trigger',  
//   //   // x: 100,
//   //   // y: 10,
//   //   // icon : 'settings_power',
//   //   color: '#33ff33',
//   //   icon: 'assets/door.png'
//   // },


//   //];

//   links: Edge[] = [
//     // Define your initial links here
//     // Example:
//     // {
//     //   id:'1',
//     //   label:'node1',
//     //   target:'first',
//     //   source:'ssd'
//     // }

//   ];

//   openDialog() {
//     // this.zone.run(() => this.dialog.open(JourneySetupFormComponent))

//     const dialogRef = this.dialog.open(JourneySetupFormComponent, {
//       width: '250px',
//       position: {
//         top: '50%',
//         left: '50%',
//       },
//     });
//   }


//   onNodeSelect(data: any) {
//     console.log(data);
//     this.initText = data;
//     // this.selectedParentNode = parentId;
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.panelClass = 'center-dialog';
//     const dialogRef: MatDialogRef<JourneySetupFormComponent> = this.dialog.open(JourneySetupFormComponent, {
//       data: 'data'
//     });


//     dialogRef.afterClosed().subscribe(result => {
//       let icon;
//       console.log('after close', result)
//       if (result == 'Trigger') {
//         this.color = '#33ff33';
//         icon = 'settings_power';
//         this.addBtn = false;

//       } else if (result == 'Condition') {
//         this.color = '#ff704d';
//         icon = 'fact_check';
//         this.addBtn = false;



//       } else {
//         this.color = '#4d4dff';
//         icon = 'pending_actions';
//         this.addBtn = false;




//       }
//       const newNodeId = Math.random().toString(); // Generate a random ID for the new node
//       // const parentNode = this.nodes.find(node => node.id === '');

//       // if (parentNode && parentNode.position) {
//       // Calculate the position of the child node relative to the parent node
//       const newX = this.newNodePosition.x + 500;; // Adjust the x-coordinate as needed
//       const newY = this.newNodePosition.y + 70; // Adjust the y-coordinate as needed


//       const newNode: MergedNode = {
//         id: newNodeId,
//         label: result,
//         position: { x: newX, y: newY },
//         x: 100,
//         y: 30,
//         color: this.color,
//         icon: icon,
//         type: '',
//         nextTrue: '',
//         action: {},
//         conditions: []
//       };

//       // const newLink: Link = {
//       //   id: 'link-' + newNodeId,
//       //   source: newNodeId,
//       //   target: newNodeId,
//       //   label: 'is child of'
//       // };

//       // Add the new node and link to the existing arrays
//       this.nodes.push(newNode);
//       this.nodes = [...this.nodes];
//       // this.links.push(newLink);
//       console.log(this.nodes);
//       // this.chRef.checkNoChanges();
//       console.log(this.links);

//     })

//   }


//   addPath(parentId: any) {
//     console.log(parentId);

//     // this.selectedParentNode = parentId;
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.panelClass = 'center-dialog';
//     const dialogRef: MatDialogRef<AddPathDialogComponent> = this.dialog.open(AddPathDialogComponent, {
//       data: 'data',
//       width: '250px',
//       position: { left: '10px' },
//       hasBackdrop: false,

//     });


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('after close ll', result)


//       const newNodeId = 'child-' + Math.random().toString(36).substr(2, 9); // Generate a random ID for the new node
//       const parentNode = this.nodes.find(node => node.id === parentId.id);

//       if (parentNode && parentNode.position) {
//         // Calculate the position of the child node relative to the parent node
//         const newX = this.newNodePosition.x + 150;; // Adjust the x-coordinate as needed
//         const newY = this.newNodePosition.y - 30; // Adjust the y-coordinate as needed

//         console.log('transform value ', parentId)
//         console.log(newX, newY);
//         this.newNodePosition.x = newX;
//         this.newNodePosition.y = newY;
//         let color;
//         let icon;
//         if (result == 'Action') {
//           color = '#249bf0';
//           icon = 'assets/energy.png';//'touch_app';


//           console.log('parent x ==>', parentId.x)
//           console.log('parent y ==>', parentId.y)

//           const x = parentId.x;
//           const y = parentId.y;



//           const newNode: Node = {
//             id: newNodeId,
//             label: result,
//             // position: { x: newX, y: newY },
//             // x: x,
//             // y: y,
//             color: color,
//             icon: icon,
//             type: '',
//             nextTrue: '',
//             action: {},
//             conditions: []
//           };
//           // if (this.triggerData != undefined) {


//           // }



//           const newLink: Edge = {
//             id: 'link-' + newNodeId,
//             source: parentId.id,
//             target: newNodeId,
//             label: 'is child of'
//           };

//           // Add the new node and link to the existing arrays
//           this.nodes.push(newNode);
//           this.nodes = [...this.nodes];
//           this.links.push(newLink);
//           this.links = [...this.links]
//           console.log(this.nodes);
//           // this.chRef.checkNoChanges();
//           console.log(this.links);

//           // Trigger change detection to update the graph view
//           this.chRef.detectChanges();
//         } else if (result == 'Condition') {
//           color = '#ff704d';
//           icon = 'assets/cond.png'//'fact_check'

//           console.log('parent x ==>', parentId.x)
//           console.log('parent y ==>', parentId.y)

//           const x = parentId.x + 5;
//           const y = parentId.y;

//           const newNode: MergedNode = {
//             id: newNodeId,
//             label: result,
//             position: { x: newX, y: newY },
//             x: x,
//             y: y,
//             color: color,
//             icon: icon,
//             type: '',
//             nextTrue: '',
//             action: {},
//             conditions: []
//           };

//           const newLink: Edge = {
//             id: 'link-' + newNodeId,
//             source: parentId.id,
//             target: newNodeId,
//             label: 'is child of'
//           };

//           // Add the new node and link to the existing arrays
//           this.nodes.push(newNode);
//           this.nodes = [...this.nodes];
//           this.links.push(newLink);
//           this.links = [...this.links]
//           console.log(this.nodes);
//           // this.chRef.checkNoChanges();
//           console.log(this.links);

//           // Trigger change detection to update the graph view
//           this.chRef.detectChanges();
//         } else {
//           color = '#fcf677';
//           icon = 'assets/clock.png'//'alarm_on';

//           console.log('parent x ==>', parentId.x)
//           console.log('parent y ==>', parentId.y)

//           const x = parentId.x;
//           const y = parentId.y;

//           const newNode: MergedNode = {
//             id: newNodeId,
//             label: 'Delay',
//             position: { x: newX, y: newY },
//             x: x,
//             y: y,
//             color: color,
//             icon: icon,
//             type: '',
//             nextTrue: '',
//             action: {},
//             conditions: []
//           };

//           const newLink: Edge = {
//             id: 'link-' + newNodeId,
//             source: parentId.id,
//             target: newNodeId,
//             label: 'is child of'
//           };

//           // Add the new node and link to the existing arrays
//           this.nodes.push(newNode);
//           this.nodes = [...this.nodes];
//           this.links.push(newLink);
//           this.links = [...this.links]
//           console.log(this.nodes);
//           // this.chRef.checkNoChanges();
//           console.log(this.links);

//           // Trigger change detection to update the graph view
//           this.chRef.detectChanges();
//         }


//       }
//     })


//   }

//   updateItemName(id: string, value: boolean, text: string) {
//     const index = this.nodes.findIndex(item => item.id === id);
//     if (index !== -1) {
//       if (text == 'Y') {
//         this.nodes[index].disabledYes = value;
//         this.nodes = [...this.nodes]
//       } else if (text == 'N') {
//         this.nodes[index].disabledNo = value;
//         this.nodes = [...this.nodes]

//       }
//     }
//   }
//   // Component logic

//   createYesNode(parentId: any, text: string) {
//     console.log(parentId);

//     // this.selectedParentNode = parentId;
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.panelClass = 'center-dialog';
//     const dialogRef: MatDialogRef<AddPathDialogComponent> = this.dialog.open(AddPathDialogComponent, {
//       data: 'data'
//     });


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('after close ll', result)


//       const newNodeId = 'child-' + Math.random().toString(36).substr(2, 9); // Generate a random ID for the new node
//       const parentNode = this.nodes.find(node => node.id === parentId.id);

//       if (parentNode && parentNode.position) {
//         // Calculate the position of the child node relative to the parent node
//         const newX = this.newNodePosition.x + 150;; // Adjust the x-coordinate as needed
//         const newY = this.newNodePosition.y - 30; // Adjust the y-coordinate as needed

//         console.log('transform value ', parentId)
//         console.log(newX, newY);
//         this.newNodePosition.x = newX;
//         this.newNodePosition.y = newY;
//         let color;
//         let icon;

//         if (text === 'Yes') {

//           if (result == 'Action') {
//             color = '#249bf0';
//             icon = 'assets/energy.png'//'touch_app';


//             console.log('parent x ==>', parentId.x)
//             console.log('parent y ==>', parentId.y)

//             const x = parentId.x;
//             const y = parentId.y;

//             this.updateItemName(parentId.id, true, 'Y')
//             const newNode: MergedNode = {
//               id: newNodeId,
//               label: result,
//               position: { x: newX, y: newY },
//               x: x,
//               y: y,
//               color: color,
//               icon: icon,
//               type: '',
//               nextTrue: '',
//               action: {},
//               conditions: []
//             };

//             const newLink: Edge = {
//               id: 'link-' + newNodeId,
//               source: parentId.id,
//               target: newNodeId,
//               label: 'Yes'
//             };

//             // Add the new node and link to the existing arrays
//             this.nodes.push(newNode);
//             this.nodes = [...this.nodes];
//             this.links.push(newLink);
//             this.links = [...this.links]
//             console.log(this.nodes);
//             // this.chRef.checkNoChanges();
//             console.log(this.links);

//             // Trigger change detection to update the graph view
//             this.chRef.detectChanges();
//           } else if (result == 'Condition') {
//             color = '#ff704d';
//             icon = 'assets/cond.png'//'fact_check'



//             const x = parentId.x + 5;
//             const y = parentId.y;

//             const newNode: MergedNode = {
//               id: newNodeId,
//               label: result,
//               position: { x: newX, y: newY },
//               x: x,
//               y: y,
//               color: color,
//               icon: icon,
//               type: '',
//               nextTrue: '',
//               action: {},
//               conditions: []
//             };

//             const newLink: Edge = {
//               id: 'link-' + newNodeId,
//               source: parentId.id,
//               target: newNodeId,
//               label: 'Yes'
//             };

//             // Add the new node and link to the existing arrays
//             this.nodes.push(newNode);
//             this.nodes = [...this.nodes];
//             this.links.push(newLink);
//             this.links = [...this.links]
//             console.log(this.nodes);
//             // this.chRef.checkNoChanges();
//             console.log(this.links);

//             // Trigger change detection to update the graph view
//             this.chRef.detectChanges();

//           } else {
//             color = '#fcf677';
//             icon = 'assets/clock.png'//'alarm_on';

//             console.log('parent x ==>', parentId.x)
//             console.log('parent y ==>', parentId.y)

//             const x = parentId.x;
//             const y = parentId.y;
//             this.updateItemName(parentId.id, true, 'Y')

//             const newNode: MergedNode = {
//               id: newNodeId,
//               label: 'Delay',
//               position: { x: newX, y: newY },
//               x: x,
//               y: y,
//               color: color,
//               icon: icon,
//               type: '',
//               nextTrue: '',
//               action: {},
//               conditions: []
//             };

//             const newLink: Edge = {
//               id: 'link-' + newNodeId,
//               source: parentId.id,
//               target: newNodeId,
//               label: 'Yes'
//             };

//             // Add the new node and link to the existing arrays
//             this.nodes.push(newNode);
//             this.nodes = [...this.nodes];
//             this.links.push(newLink);
//             this.links = [...this.links]
//             console.log(this.nodes);
//             // this.chRef.checkNoChanges();
//             console.log(this.links);

//             // Trigger change detection to update the graph view
//             this.chRef.detectChanges();
//           }
//         } else {


//           if (result == 'Action') {
//             color = '#249bf0';
//             icon = 'assets/energy.png'//'touch_app';


//             console.log('parent x ==>', parentId.x)
//             console.log('parent y ==>', parentId.y)

//             const x = parentId.x;
//             const y = parentId.y;
//             this.updateItemName(parentId.id, true, 'N')

//             const newNode: MergedNode = {
//               id: newNodeId,
//               label: result,
//               position: { x: newX, y: newY },
//               x: x,
//               y: y,
//               color: color,
//               icon: icon,
//               type: '',
//               nextTrue: '',
//               action: {},
//               conditions: []
//             };

//             const newLink: Edge = {
//               id: 'link-' + newNodeId,
//               source: parentId.id,
//               target: newNodeId,
//               label: 'No'
//             };

//             // Add the new node and link to the existing arrays
//             this.nodes.push(newNode);
//             this.nodes = [...this.nodes];
//             this.links.push(newLink);
//             this.links = [...this.links]
//             console.log(this.nodes);
//             // this.chRef.checkNoChanges();
//             console.log(this.links);

//             // Trigger change detection to update the graph view
//             this.chRef.detectChanges();
//           } else if (result == 'Condition') {
//             color = '#ff704d';
//             icon = 'assets/cond.png'//'fact_check'


//             this.updateItemName(parentId.id, true, 'N')

//             const x = parentId.x + 5;
//             const y = parentId.y;

//             const newNode: MergedNode = {
//               id: newNodeId,
//               label: result,
//               position: { x: newX, y: newY },
//               x: x,
//               y: y,
//               color: color,
//               icon: icon,
//               type: '',
//               nextTrue: '',
//               action: {},
//               conditions: []
//             };

//             const newLink: Edge = {
//               id: 'link-' + newNodeId,
//               source: parentId.id,
//               target: newNodeId,
//               label: 'No'
//             };

//             // Add the new node and link to the existing arrays
//             this.nodes.push(newNode);
//             this.nodes = [...this.nodes];
//             this.links.push(newLink);
//             this.links = [...this.links]
//             console.log(this.nodes);
//             // this.chRef.checkNoChanges();
//             console.log(this.links);

//             // Trigger change detection to update the graph view
//             this.chRef.detectChanges();

//           } else {
//             color = '#fcf677';
//             icon = 'assets/clock.png'//'alarm_on';

//             console.log('parent x ==>', parentId.x)
//             console.log('parent y ==>', parentId.y)
//             this.updateItemName(parentId.id, true, 'N')

//             const x = parentId.x;
//             const y = parentId.y;

//             const newNode: MergedNode = {
//               id: newNodeId,
//               label: 'Delay',
//               position: { x: newX, y: newY },
//               x: x,
//               y: y,
//               color: color,
//               icon: icon,
//               disabledNo: true,
//               type: '',
//               nextTrue: '',
//               action: {},
//               conditions: []
//             };

//             const newLink: Edge = {
//               id: 'link-' + newNodeId,
//               source: parentId.id,
//               target: newNodeId,
//               label: 'No'
//             };

//             // Add the new node and link to the existing arrays
//             this.nodes.push(newNode);
//             this.nodes = [...this.nodes];
//             this.links.push(newLink);
//             this.links = [...this.links]
//             console.log(this.nodes);
//             // this.chRef.checkNoChanges();
//             console.log(this.links);

//             // Trigger change detection to update the graph view
//             this.chRef.detectChanges();
//           }
//         }




//       }
//     })

//   }

//   deleteNode(node: any, text: any) {

//     console.log('data for yes or no', text)
//     // Delete the selected node
//     const index = this.nodes.indexOf(node);
//     if (index > -1) {
//       this.nodes.splice(index, 1);
//     }
//     this.updateItemName(node.id, false, '');

//     this.links = this.links.filter((link: any) => link.source !== node.id && link.target !== node.id);

//     // Delete the child nodes recursively
//     this.deleteChildNodes(node.id);
//   }


//   deleteChildNodes(parentId: string) {
//     const childNodes = this.nodes.filter((node) => node.id === parentId);

//     for (const childNode of childNodes) {
//       // this.deleteChildNodes(childNode.id);

//       const index = this.nodes.indexOf(childNode);
//       if (index > -1) {
//         this.nodes.splice(index, 1);
//       }
//       this.links = this.links.filter((link: any) => link.source !== parentId && link.target !== parentId);

//     }
//   }



//   removeChildren(node: any) {
//     // Find all child nodes with the given parent ID
//     const childNodes = this.nodes.filter((n: any) => {
//       console.log('n1', n.id, '==', 'n2', node)
//       n.id == node

//     });
//     console.log('c', childNodes)

//     for (const childNode of childNodes) {
//       // Recursively remove child nodes
//       this.removeChildren(childNode.id);

//       console.log('c1', childNodes)

//       // Remove the child node from the nodes array
//       const childIndex = this.nodes.findIndex((n: any) => n.id === childNode.id);
//       if (childIndex > -1) {
//         this.nodes.splice(childIndex, 1);
//       }

//       // Remove any links associated with the child node
//       this.links = this.links.filter((link: any) => link.source !== childNode.id && link.target !== childNode.id);
//     }
//   }

//   // createNoNode(node: any) {
//   //   // Create a new No node object
//   //   const noNode = {
//   //     id: this.generateUniqueId(), // Generate a unique ID for the node
//   //     label: 'No', // Label for the node
//   //     // Add any other properties required for the node
//   //   };

//   //   // Add the No node to the nodes array
//   //   this.nodes.push(noNode);

//   //   // Create a new link between the current node and the No node
//   //   const link = {
//   //     id: this.generateUniqueId(), // Generate a unique ID for the link
//   //     source: node.id, // ID of the current node
//   //     target: noNode.id, // ID of the No node
//   //     // Add any other properties required for the link
//   //   };

//   //   // Add the link to the links array
//   //   this.links.push(link);

//   //   // Refresh the graph to reflect the changes
//   //   this.refreshGraph();
//   // }
//   uniqueIdCounter: number = 0;

//   generateUniqueId() {
//     // Implement a function to generate a unique ID for nodes and links
//     // You can use any method you prefer, such as a UUID generator or a simple counter-based approach.
//     // Here's an example using a counter-based approach:

//     // Increment the counter
//     this.uniqueIdCounter++;

//     // Return the unique ID
//     return 'node_' + this.uniqueIdCounter;
//   }

//   refreshGraph() {
//     // Function to refresh the graph and apply any changes
//     // You need to implement the logic to update the graph component or trigger a refresh if needed.
//     // This might involve updating the `nodes` and `links` arrays or calling a function/method provided by the graph library you are using.
//   }


//   // this.newNodePosition = { x: 250, y: 275 }; // Adjust the position as needed
//   event(event: any) {
//     console.log(event);
//   }
//   draggedLine: any;
//   isDragging!: boolean;
//   // Component class
//   startDragging(event: MouseEvent) {
//     this.isDragging = true;
//     this.draggedLine = {
//       x1: 0, // Initial x1 coordinate
//       y1: 250, // Initial y1 coordinate
//       x2: event.offsetX, // Initial x2 coordinate based on mouse position
//       y2: event.offsetY, // Initial y2 coordinate based on mouse position
//     };
//   }

//   dragLine(event: MouseEvent) {
//     if (this.isDragging) {
//       this.draggedLine.x2 = event.offsetX; // Update x2 coordinate while dragging
//       this.draggedLine.y2 = event.offsetY; // Update y2 coordinate while dragging
//     }
//   }

//   endDragging() {
//     if (this.isDragging) {
//       // Perform any necessary actions when dragging ends
//       // For example, you can update the nodes or links based on the dragged line

//       this.isDragging = false;
//       this.draggedLine = null;
//     }
//   }

// }
