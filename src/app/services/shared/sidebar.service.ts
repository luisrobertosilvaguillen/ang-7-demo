import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any=[
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu:[
        {
          title:'Dashboard', url:'/dashboard',
        },
        {
          title:'ProgressBar', url:'/progress',
        },
        {
          title:'Graphs', url:'/graphs',
        },
        {
          title:'Promises', url:'/promises',
        },
        {
          title:'Rxjs', url:'/rxjs',
        }
      ]
    }
  ]
  constructor() { }
}
