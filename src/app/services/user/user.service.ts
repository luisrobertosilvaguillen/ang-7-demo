import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/users.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string ;
  user: User ;
  constructor(public http: HttpClient, public router: Router) {
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
   login(user: User, remember:boolean = false){
    if(remember)
      localStorage.setItem('email', user.email);
    else
      localStorage.removeItem('email');

    let url = `${URL_SERVICE}/login`;
    return this.http.post(url, user).pipe(
      map((resp: any) => {
        localStorage.setItem('id', resp.id)
        localStorage.setItem('token', resp.token)
        localStorage.setItem('user', JSON.stringify(resp.user))
        this.token= resp.token;
        return true;
      })
    )
   }
   createUser(user: User) {
    let url = `${URL_SERVICE}/user`;
    return this.http.post(url, user).pipe(
      map((resp: any) => {
        swal.fire({title: "Excelente", text: "Te has registrado", type: 'success'});
        return resp.user;
      })
    )
   }
}
