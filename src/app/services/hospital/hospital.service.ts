import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from 'src/app/config/config';
import {map} from 'rxjs/operators';
import swal from 'sweetalert2';
import { Hospital } from 'src/app/models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(public http: HttpClient) {

   }
   totalHospitals :number = 0;
   loadHospitals(){
     let url = `${URL_SERVICE}/hospital`;
     return this.http.get(url).pipe(
       map((resp : any) => {
         this.totalHospitals = resp.total;
         return  resp.hospitals;
       })
     );
   }
   getHospital(_id:string){
    let url = `${URL_SERVICE}/hospital/${_id}`;
    return this.http.get(url).pipe(
      map((resp : any) => {
        return  resp.hospital;
      })
    );
  }
  deleteHospital(_id:string){
    let url = `${URL_SERVICE}/hospital/${_id}`;
    return this.http.delete(url).pipe(
      map((resp : any) => {
        swal.fire(
          'Eliminado!',
          `Hospital ${resp.name} ha sido eliminado exitosamente`,
          'success'
        )       
        return true;
      })
    );
  }

  createHospital(hospital: Hospital) {
    let url = `${URL_SERVICE}/hospital`;
 
    return this.http.post(url, hospital).pipe(
      map((resp: any) => {
        swal.fire({title: "Excelente", text: `Hospital ${hospital.name} creado correctamente`, type: 'success'});
        return resp.hospital;
      })
    )
   }
   updateHospital(hospital: Hospital){
    let url = `${URL_SERVICE}/hospital/${hospital._id}`;
    return this.http.put(url, hospital).pipe(
      map((resp: any)=>{
        swal.fire({title: "Hospital Actualizado", text: hospital.name, type: 'success'});
        return resp.hospital;
      })
    );
   }
   searchHospital(term:string){
    let url = `${URL_SERVICE}/search/collection/hospitals/${term}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.hospitals;
      })
    );
   }
  
}
