import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar_: SidebarService, public _userService : UserService) { }
  logoOut(){
    this._userService.logOut();
  }
  ngOnInit() {
  }

}
