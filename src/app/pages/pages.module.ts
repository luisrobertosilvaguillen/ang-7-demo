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
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    SecurepagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    AccountSettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    PegesRoutingModule,
    FormsModule,
    ComponentsModule,
    ChartsModule,
    PipesModule
  ]
})
export class PagesModule { }
