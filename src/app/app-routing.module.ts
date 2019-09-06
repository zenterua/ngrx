import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddNewCarComponent} from './add-new-car/add-new-car.component';


const routes: Routes = [
  // {path: '', component: AddNewCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
