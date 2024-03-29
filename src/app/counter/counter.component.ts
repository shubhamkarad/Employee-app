import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import{Store} from '@ngrx/store';  
import{increment, decrement, reset} from 'couter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');

   }

  
  ngOnInit(): void {
  }
  increment(){ this.store.dispatch(increment()) }
  decrement(){ this.store.dispatch(decrement())}
  reset(){ this.store.dispatch(reset())}
  
}
