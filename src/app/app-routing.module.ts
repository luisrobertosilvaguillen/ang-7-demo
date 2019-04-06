import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Graphs1Component } from './pages/graphs1/graphs1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SecurepagesComponent } from './pages/securepages.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  {
    path:'', 
    component: SecurepagesComponent, 
    children:[
      {path:'dashboard', component: DashboardComponent},
      {path:'progress', component: ProgressComponent},
      {path:'graficas-1', component: Graphs1Component},
      {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
    ]
  },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**',  component: NopagefoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
