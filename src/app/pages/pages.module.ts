import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
