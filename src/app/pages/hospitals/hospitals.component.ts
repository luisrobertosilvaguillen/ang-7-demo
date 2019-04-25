import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/service.index';
import swal from 'sweetalert2';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styles: []
})
export class HospitalsComponent implements OnInit {

  constructor(public _hospitalService: HospitalService,
    public _modalUploadService : ModalUploadService) {

     }
  hospitals:Hospital[] = [];
  from: number = 0;
  rows: number = 0;
  
  ngOnInit() {
    this.loadHospitals();
    this._modalUploadService.trigger.subscribe(resp => this.loadHospitals());
  }

  loadHospitals(){
    this._hospitalService.loadHospitals().subscribe(hospitals => {
      this.hospitals = hospitals;
      this.rows = this._hospitalService.totalHospitals;
    });
  }
  searchHospitals(term:string){
    if(term != '')
    {

      this._hospitalService.searchHospital(term).subscribe( (resp :Hospital[]) => {
        if(resp)
        {
          this.rows = resp.length;
          this.hospitals = resp;
        }
      });
    }
    else{
      this.loadHospitals();
    }
  }
  saveHospital(hospital: Hospital){
    this._hospitalService.updateHospital(hospital).subscribe();
  }
  createHospital(){
    swal.fire({
      title: 'Crear Hospital',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'on'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (hospital) => {
        if(!hospital || hospital.length === 0)
          return;

        this._hospitalService.createHospital(new Hospital(hospital)).subscribe(resp => this.loadHospitals());
      },
      allowOutsideClick: () => false
    }).then((result:any) => {
      if (result.value) {
        swal.fire({
          title: `${result.hospital.name}' creado exitosamente`
        })
      }
    })


  }
  updateImage(hospital: Hospital){
    this._modalUploadService.showModal("hospitals", hospital._id);
  }
  deleteHospital(hospital: Hospital){
    swal.fire({
      title: 'Advertencia',
      text: `Desea eliminar el hospital: ${hospital.name}`, 
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
        this._hospitalService.deleteHospital(hospital._id).subscribe((resp:boolean) => {
          console.log(resp)
          if(resp){
            this.loadHospitals();
          }
        });
      }
    })
  }
}
