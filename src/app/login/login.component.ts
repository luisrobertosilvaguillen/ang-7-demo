import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/users.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _userService : UserService, public router: Router) { }
  remember : boolean = false;
  email : string;
  ngOnInit() {
    init_plugins();
    this.email  = localStorage.getItem('email') || '';
    this.remember  =this.email.length > 0 ;
  }
  in(form:NgForm){
    if(form.invalid)
      return;

      let user = new User(
        null,
        form.value.email,
        form.value.password,
      );
    this._userService.login(user, form.value.remember)
    .subscribe(resp => this.router.navigate(['/dashboard']));
  }
}
