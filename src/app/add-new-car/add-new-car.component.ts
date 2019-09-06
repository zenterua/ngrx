import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {addCar, removeLastCar} from '../redux/car.action';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {
  cars$: Observable<[]>;
  inputCarValue: string;
  constructor(private store: Store<{carPage: string[]}>) {
  }

  ngOnInit() {
    this.cars$ = this.store.pipe(select('carPage'), tap((data) => {
      console.log(data);
      if ( this.inputCarValue ) {
        this.inputCarValue = '';
      }
    }));
    console.log(this.cars$);
  }

  addNewCar() {
    console.log(this.inputCarValue);
    this.store.dispatch(addCar({carName: this.inputCarValue}));
  }

  removeLastCar() {
    this.store.dispatch(removeLastCar());
  }
}
