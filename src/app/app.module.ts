import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarOrderFormComponent } from './car-order-form/car-order-form.component';
import {AddNewCarComponent} from './add-new-car/add-new-car.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {StoreModule} from '@ngrx/store';
import {carReducerFunc} from './redux/cars.reducer';
import {FormsModule} from '@angular/forms';
// import {carsReducer} from './redux/cars.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarOrderFormComponent,
    AddNewCarComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      carPage: carReducerFunc
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
