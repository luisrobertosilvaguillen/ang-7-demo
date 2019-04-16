import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services/service.index';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  user : User;
  constructor(public _sidebar_: SidebarService, public _userService : UserService) { }
  logoOut(){
    this._userService.logOut();
  }
  ngOnInit() {
    this.user = this._userService.user;
  }

}
