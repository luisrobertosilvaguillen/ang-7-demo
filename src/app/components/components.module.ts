import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValueBarControllerComponent } from './value-bar-controller/value-bar-controller.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ValueBarControllerComponent,
    DonutGraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports:[
    ValueBarControllerComponent,
    DonutGraphComponent
  ]
})
export class ComponentsModule { }
