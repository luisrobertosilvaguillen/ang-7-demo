import { Component, OnInit } from '@angular/core';

import { SettingsService } from 'src/app/services/service.index';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings_: SettingsService) {
   }

  changeColor(theme: string, link: any){
    this._settings_.setTheme(theme);
    this.changeCheck(link);
  }
  changeCheck(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for(let ref of selectors){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  setTheme(){
    let theme = this._settings_.settings.theme;
    let selectors: any = document.getElementsByClassName('selector');
    for(let ref of selectors){
      if(ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
    }
  }
  ngOnInit() {
    this.setTheme();
  }

}
