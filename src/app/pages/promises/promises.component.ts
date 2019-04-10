import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.counterFn()
    .then(message => console.log("It finished", message))
    .catch(err => console.log("Got Error", err));
   }

   counterFn(): Promise<string> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        console.log(counter)
        if(counter === 3){
          resolve('OK');
          clearInterval(interval);
        }
      }, 1000)
    });
   }

  ngOnInit() {
  }

}
