import {Action, createReducer, on, State} from '@ngrx/store';
import {addCar, removeLastCar} from './car.action';

const initialState: string[] = ['bmw', 'mazda', 'audi'];

const carReducer = createReducer(initialState,
  on(addCar, (state, {carName}) => [...state, carName]),
  on(removeLastCar, state => [...state].slice(0, -1))
);

export function carReducerFunc(state, action) {
  return carReducer(state, action);
}

// export function carsReducer(state = initialState, action: AddCar) {
//   switch (action.type) {
//     case CarAction.ADD_CARR:
//       return {
//         ...state,
//         casrs: [...state.cars, action.payload]
//       };
//     default:
//       return state;
//   }
// }
