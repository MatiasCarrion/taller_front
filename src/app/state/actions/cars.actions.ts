import { createAction, props } from '@ngrx/store';
import { CarModel } from '../../core/models/car.model';
 
export const loadCars = createAction(
  '[Cars List] Load Cars',
);

export const loadedCars = createAction(
    '[Cars List] Loaded Success',
    props<{ cars: CarModel[] }>()
);

export const addingCar = createAction(
  '[Cars List] Add Car in progress',
);

export const addedCar = createAction(
  '[Cars List] Car Add Success',
  props<{car: CarModel}>()
);