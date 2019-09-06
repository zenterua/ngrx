import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  cars$: Observable<[]>;

  constructor(private store: Store<{carPage: []}>) {}

  ngOnInit() {
    this.cars$ = this.store.pipe(select('carPage'), tap((data) => {
      console.log(data);
    }));
    console.log(this.cars$);
  }

}
