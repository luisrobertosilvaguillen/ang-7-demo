import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SecurepagesComponent } from './securepages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
    {
      path:'', 
      component: SecurepagesComponent, 
      children:[
        {path:'dashboard', component: DashboardComponent},
        {path:'progress', component: ProgressComponent},
        {path:'graficas-1', component: Graphs1Component},
        {path:'account-settings', component: AccountSettingsComponent},
        {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
  })
  export class PegesRoutingModule { }