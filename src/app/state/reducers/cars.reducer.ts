import { createReducer, on } from '@ngrx/store';
import { carState } from 'src/app/core/states/car.state';
import { addedCar, addingCar, loadCars, loadedCars } from '../actions/cars.actions';


export const initialState: carState = { loading: false, cars: [] };

export const carsReducer = createReducer(
  initialState,
  on(loadCars, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadedCars, (state, { cars }) => {
    return {
      ...state,
      loading: false,
      cars
    }
  }),
  on(addingCar, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(addedCar, (state, { car }) => {
    return {
      ...state,
      loading: false,
      cars: [car, ...state.cars]
    }
  })
);