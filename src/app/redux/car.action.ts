import {Action, createAction, props} from '@ngrx/store';

// export namespace CarAction {
//   export const ADD_CARR = 'ADD_CAR';
// }
// //
// export class AddCar implements Action {
//   readonly type = CarAction.ADD_CARR;
//   constructor(public payload) {}
// }

export const addCar = createAction(
  'ADD_CAR',
  props<{carName: string}>()
);

export const removeLastCar = createAction(
  'REMOVE_CAR'
)
