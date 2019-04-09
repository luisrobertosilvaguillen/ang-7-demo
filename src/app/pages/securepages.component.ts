import { Component, OnInit } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-securepages',
  templateUrl: './securepages.component.html',
  styles: []
})
export class SecurepagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
