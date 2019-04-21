import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValueBarControllerComponent } from './value-bar-controller/value-bar-controller.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';
import { ChartsModule } from 'ng2-charts';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ValueBarControllerComponent,
    DonutGraphComponent,
    ModalUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    PipesModule
  ],
  exports:[
    ValueBarControllerComponent,
    DonutGraphComponent,
    ModalUploadComponent
  ]
})
export class ComponentsModule { }
