import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _userService : UserService) { 

  }
  user : User;
  logoOut(){
    this._userService.logOut();
  }
  ngOnInit() {
    this.user = this._userService.user;
  }

}
