import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: ISettings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  }
  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }
  saveSettings(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
  loadSettings(){
    if(!localStorage.getItem('settings'))
      this.saveSettings();

    this.settings = JSON.parse(localStorage.getItem('settings'));
    this.setTheme(this.settings.theme);
  }
  setTheme(theme: string){
      let url = `assets/css/colors/${theme}.css`
      this._document.getElementById("currentTheme").setAttribute('href', url);
      this.settings.theme = theme;
      this.settings.themeUrl = url;
      this.saveSettings();
    }
}


interface ISettings {
  themeUrl:string;
  theme: string;
}