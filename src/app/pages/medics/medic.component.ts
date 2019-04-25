import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from 'src/app/models/hospital.model';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import { MedicService, HospitalService } from 'src/app/services/service.index';
import { Medic } from 'src/app/models/medic.model';
import { User } from 'src/app/models/users.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styles: []
})
export class MedicComponent implements OnInit {
  hospitals :Hospital[] = [];
  medic: Medic = new Medic('', '', new User('', '', ''), new Hospital('','',''), '');
  constructor(
    public _modalUploadService : ModalUploadService,
    public _medicService: MedicService,
    public _router: Router,
    public _activatedRoute: ActivatedRoute,
    public _hospitalService: HospitalService
  ) { 
    _activatedRoute.params.subscribe(params =>{
      let id = params["id"];
      if(id !== "new")
        this.getMedic(id);
    });
  }

  ngOnInit() {
    this.loadHospitals();
    this._modalUploadService.trigger.subscribe((resp:any) => {
      this.medic = resp.medic;
    });
  }
  
  loadHospitals(){
    this._hospitalService.loadHospitals().subscribe(
      (resp : Hospital[]) => {
        this.hospitals = resp
      }
    )
  }

  saveMedic(form: NgForm){
    if(form.valid){
      if(this.medic._id !== "")
      {
        this._medicService.updateMedic(form.value).subscribe(
          (resp : Medic) => {
            this.medic._id = resp._id;
          }
        );        
      }
      else
      {
        this._medicService.createMedic(form.value).subscribe(
          (resp : Medic) => {
            this.medic._id = resp._id;
            this._router.navigate(["/medic", resp._id]);
          }
        );
      }
    }
  }
  getMedic(id: string){
    this._medicService.getMedic(id)
    .subscribe((medic:Medic)=> {
      this.medic = medic;
    })
  }
  changeHospital(id: string){
    this._hospitalService.getHospital(id)
    .subscribe((hospital:Hospital)=> {
      this.medic.hospital = hospital;
    })
  }
  updateImage(){
    this._modalUploadService.showModal("medics", this.medic._id);
  }
}
