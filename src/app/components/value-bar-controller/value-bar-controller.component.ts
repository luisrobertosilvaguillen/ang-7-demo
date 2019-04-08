import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-value-bar-controller',
  templateUrl: './value-bar-controller.component.html',
  styleUrls: ['./value-bar-controller.component.css']
})
export class ValueBarControllerComponent implements OnInit {

  constructor() { }

  @ViewChild('percentTxt') txtProgress: ElementRef;

  @Input('mainTitle') title: string = 'Titulo Banner';
  @Input() percent: number = 0;

  @Output() onChange: EventEmitter<number> = new EventEmitter();
  ngOnInit() {
  }
  changeValue(value: number){
    if((this.percent >= 100 && value > 0) || (this.percent <= 0 && value < 0))
      return; 
    this.percent += value;
    this.onChange.emit(this.percent);
    this.txtProgress.nativeElement.focus();
  }
  modelChanged(newValue: number){
    
    if(newValue >= 100)
      newValue = 100;
    else if(newValue <= 0)
      newValue = 0;    

    this.percent = newValue;  

    this.txtProgress.nativeElement.value = this.percent;
    

    this.onChange.emit(this.percent);
  }
}
