import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PegesRoutingModule } from './pages.routing.module';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { SecurepagesComponent } from './securepages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    SecurepagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    AccountSettingsComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    PegesRoutingModule,
    FormsModule,
    ComponentsModule,
    ChartsModule
  ]
})
export class PagesModule { }
