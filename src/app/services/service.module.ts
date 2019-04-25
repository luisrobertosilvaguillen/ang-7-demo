import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService, HospitalService, MedicService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

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
    UploadFileService,
    ModalUploadService,
    HospitalService,
    MedicService
  ]
})
export class ServiceModule { }
