import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { UploadFileService } from 'src/app/services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  constructor(public _uploadFileService: UploadFileService,
    public _modalUploadService: ModalUploadService) { 


  }

  hideModal(){
    this.tempImage = null;
    this.image = null;
    this._modalUploadService.hideModal();
  }

  image: File;
  tempImage: string;
  ngOnInit() {
    console.log('Modal Listo')
  }
  selectImage(file){
    if(!file){
      this.image = null;
      return;
    }
    if(file.type.indexOf('image') < 0){
      this.image = null;
      swal.fire({title: "Archivo Inválido", text: "El archivono es una imagen", type: 'error'})
      return;
    }    
    this.image = file;

    let reader = new FileReader();
    let urlTempImage = reader.readAsDataURL(file);
    reader.onloadend = () => this.tempImage = reader.result as string;

  }
  uploadImage(){
    this._uploadFileService.uploadFile(this.image, this._modalUploadService.type, this._modalUploadService.id)
    .then((resp) => {
      this._modalUploadService.trigger.emit(resp);
      this.hideModal();
    })
    .catch((err) => {
      console.log("Error en la carga...");
    })
  }
  
}
