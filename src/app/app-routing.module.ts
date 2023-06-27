import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyGraphComponent } from './journey/journey-graph/journey-graph.component';

const routes: Routes = [
  {
    path:'',redirectTo:'journey',pathMatch:'full'
  },
  {
    path:'journey',component:JourneyGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
