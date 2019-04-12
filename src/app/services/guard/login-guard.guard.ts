import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate{
  constructor(public _userService : UserService, public router : Router){}
  canActivate(){
    if(this._userService.isLogged())
    {
      return true;
    }
    this.router.navigate(['/login']);
     return  false;
  }
}
