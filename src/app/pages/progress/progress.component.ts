import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  percent: number = 50;
  constructor() { }

changeValue(value){
  if((this.percent >= 100 && value > 0) || (this.percent <= 0 && value < 0))
    return; 
  this.percent += value;
}

  ngOnInit() {
  }

}
