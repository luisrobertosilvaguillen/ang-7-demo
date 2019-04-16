import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService } from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService, 
    SettingsService, 
    SidebarService,
    UserService,
    LoginGuardGuard,
    UploadFileService
  ]
})
export class ServiceModule { }
