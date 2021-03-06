import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SecurepagesComponent } from './securepages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MedicComponent } from './medics/medic.component';
import { MedicsComponent } from './medics/medics.component';
const routes: Routes = [
    {
      path:'', 
      component: SecurepagesComponent, 
      canActivate: [LoginGuardGuard],
      children:[
        {path:'dashboard', component: DashboardComponent, data:{title: 'Dashboard'}},
        {path:'progress', component: ProgressComponent, data:{title: 'Progress'}},
        {path:'graphs', component: Graphs1Component, data:{title: 'Grapsh'}},
        {path:'promises', component: PromisesComponent, data:{title: 'Promises'}},
        {path:'rxjs', component: RxjsComponent, data:{title: 'Observables'}},
        {path:'account-settings', component: AccountSettingsComponent, data:{title: 'Style Settings'}},
        {path:'profile', component: ProfileComponent, data:{title: 'Perfil de Usuario'}},
        //general
        {path:'users', component: UsersComponent, data:{title: 'Usuarios'}},
        {path:'hospitals', component: HospitalsComponent, data:{title: 'Hospitales'}},
        {path:'medics', component: MedicsComponent, data:{title: 'Medicos'}},
        {path:'medic/:id', component: MedicComponent, data:{title: 'Administrador de Medicos'}},
        {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
  })
  export class PegesRoutingModule { }