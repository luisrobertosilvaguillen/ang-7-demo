import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from 'src/app/config/config';
import {map} from 'rxjs/operators';
import swal from 'sweetalert2';
import { Medic } from 'src/app/models/medic.model';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor(public http: HttpClient) { }
  totalMedics :number = 0;

  searchMedics(term:string){
    let url = `${URL_SERVICE}/search/collection/medics/${term}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.medics;
      })
    );
   }

   loadMedics(){
    let url = `${URL_SERVICE}/medic`;
    return this.http.get(url).pipe(
      map((resp : any) => {
        this.totalMedics = resp.total;
        return  resp.medics;
      })
    );     
   }   
   deleteMedic(_id:string){
    let url = `${URL_SERVICE}/medic/${_id}`;
    return this.http.delete(url).pipe(
      map((resp : any) => {
        swal.fire(
          'Eliminado!',
          `Médico ${resp.name} ha sido eliminado exitosamente`,
          'success'
        )       
        return true;
      })
    );
  }
  createMedic(medic: Medic) {
    let url = `${URL_SERVICE}/medic`;
 
    return this.http.post(url, medic).pipe(
      map((resp: any) => {
        swal.fire({title: "Excelente", text: `Médico ${medic.name} creado correctamente`, type: 'success'});
        return resp.medic;
      })
    )
   }
   updateMedic(medic: Medic){
    let url = `${URL_SERVICE}/medic/${medic._id}`;
    return this.http.put(url, medic).pipe(
      map((resp: any)=>{
        swal.fire({title: "Médico Actualizado", text: medic.name, type: 'success'});
        return resp.medic;
      })
    );
   }
   getMedic(_id:string){
    let url = `${URL_SERVICE}/medic/${_id}`;
    return this.http.get(url).pipe(
      map((resp : any) => {
        return  resp.medic;
      })
    );
  }     
}
