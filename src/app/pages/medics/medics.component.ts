import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import { MedicService } from 'src/app/services/service.index';
import { Medic } from 'src/app/models/medic.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styles: []
})
export class MedicsComponent implements OnInit {
  medics:Medic[] = [];
  from: number = 0;
  rows: number = 0;
  constructor(public _modalUploadService : ModalUploadService,
              public _medicService: MedicService) { }

  ngOnInit() {
    this.loadMedics();
    this._modalUploadService.trigger.subscribe(resp => this.loadMedics());
  }
  loadMedics(){
    this._medicService.loadMedics().subscribe(medics => {
      this.medics = medics;
      this.rows = this._medicService.totalMedics;
    });
  }
  searchMedics(term:string){
    if(term != '')
    {
      this._medicService.searchMedics(term).subscribe( (resp :Medic[]) => {
        if(resp)
        {
          this.rows = resp.length;
          this.medics = resp;
        }
      });
    }
    else{
      this.loadMedics();
    }    
  }

 
  updateImage(medic: Medic){
    this._modalUploadService.showModal("medics", medic._id);
  }
  deleteMedic(medic: Medic){
    swal.fire({
      title: 'Advertencia',
      text: `Desea eliminar al medico: ${medic.name}`, 
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
        this._medicService.deleteMedic(medic._id).subscribe((resp:boolean) => {
          if(resp){
            this.loadMedics();
          }
        });
      }
    })
  }  
}
