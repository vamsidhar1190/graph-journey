import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { JourneyGraphComponent } from './journey/journey-graph/journey-graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { JourneySetupFormComponent } from './journey/journey-setup-form/journey-setup-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AddPathDialogComponent } from './journey/add-path-dialog/add-path-dialog.component';
import { AddJourneySchemaComponent } from './journey/add-journey-schema/add-journey-schema.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
// import { GraphComponent } from './journey/graph/graph.component';





@NgModule({
  declarations: [
    AppComponent,
    JourneyGraphComponent,
    JourneySetupFormComponent,
    AddPathDialogComponent,
    AddJourneySchemaComponent,
    // GraphComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    NgxGraphModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule
  ],
  entryComponents: [JourneySetupFormComponent],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
