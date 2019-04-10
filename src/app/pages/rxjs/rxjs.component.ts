import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription : Subscription;
  constructor() { 
    this.subscription = this.retObs()
    .subscribe(
      number => console.log('Subs', number),
      error => console.log('Got an error', error),
      () => console.log("Complete")
    )
  }
  retObs(): Observable<any>  {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        observer.next(counter);
        if(counter === 3){
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);

    });
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
