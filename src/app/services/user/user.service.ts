import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/users.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2'
import { UploadFileService } from '../upload-file/upload-file.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string ;
  user: User ;
  constructor(public http: HttpClient, public router: Router, public _uploadFileService: UploadFileService) {
    this.loadStorage();
  }
  isLogged():boolean
  {
    return this.token.length > 5;
  }
  loadStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token')
      this.user = JSON.parse( localStorage.getItem('user'));
    }
    else
    {
      this.token = '';
      this.user = null;
    }
  }
  logOut(){
    this.token = '';
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  getDefaulHeaders() : HttpHeaders  {
    const headersMap = {
      'Accept': 'application/json',
      'No-Auth': 'True'
    };
    return new HttpHeaders(headersMap);   
  }

  saveUserStorage(id : string, token: string, user: User){
    localStorage.setItem('id', id)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.token= token;
    this.user= user;
  }

  login(user: User, remember:boolean = false){
    if(remember)
      localStorage.setItem('email', user.email);
    else
      localStorage.removeItem('email');

    let url = `${URL_SERVICE}/login`;

    return this.http.post(url, user, {headers: this.getDefaulHeaders()}).pipe(
      map((resp: any) => {
        this.saveUserStorage(resp.id, resp.token, resp.user);
        return true;
      })
    )
   }
   createUser(user: User) {
    let url = `${URL_SERVICE}/user`;
 
    return this.http.post(url, user, {headers: this.getDefaulHeaders()}).pipe(
      map((resp: any) => {
        swal.fire({title: "Excelente", text: "Te has registrado", type: 'success'});
        return resp.user;
      })
    )
   }

   updateUser(user: User){
    let url = `${URL_SERVICE}/user/${user._id}`;
    return this.http.put(url, user).pipe(
      map((resp: any)=>{
        let oUser : User = resp.user;
        this.saveUserStorage(oUser._id, this.token, oUser);
        swal.fire({title: "Usuario Actualizado", text: oUser.name, type: 'success'})
      })
    );
   }

   changeImage(file: File, id: string){
    this._uploadFileService.uploadFile(file, 'users', id)
    .then((resp: any) => {
        this.user.img = resp.user.img;
        swal.fire({title: "Imagen Actualizada", text: resp.user.name, type: 'success'})
        this.saveUserStorage(this.user._id, this.token, this.user);
    })
    .catch((err) => {
      console.log(err);
    })
   }
}
