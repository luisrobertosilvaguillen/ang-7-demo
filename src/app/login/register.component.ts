import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/users.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _userService : UserService, public router: Router) {
    
   }
  form: FormGroup;
    areEqual(field1:string, field2:string){
      return (group: FormGroup) => {
        let pass1 =group.controls[field1].value;
        let pass2 =group.controls[field2].value;
  
        if(pass1 === pass2)
          return null
  
          return {areEqual: true};
      }
    }
  ngOnInit() {
    init_plugins();
    this.form= new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]), 
      password: new FormControl(null, Validators.required), 
      repassword: new FormControl(null, Validators.required), 
      conditions: new FormControl(false), 
    }, {validators:this.areEqual('password', 'repassword') });
  }
  registerUser(){
    if(!this.form.valid)
      return;

    if(!this.form.value.conditions)
        swal.fire({title: "Importante!", text: "Debes aceptar las condiciones!", type: 'error'});

      let user = new User(
        this.form.value.name,
        this.form.value.email,
        this.form.value.password,
      );
      this._userService.createUser(user).subscribe(resp => this.router.navigate(['/login']));

  }

}
