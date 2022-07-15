import { createSelector } from '@ngrx/store';
import { carState } from 'src/app/core/states/car.state';
import { AppState } from '../app.state';
 
export const selectCarsFeature = (state: AppState) => state.carsList;
 
export const selectListCars = createSelector(
  selectCarsFeature,
  (state: carState) => state.cars
);

export const selectOneCar = createSelector(
  selectCarsFeature,
  (state: carState, id: number) => state.cars.filter(oneCar => oneCar.id == id)[0]
);

export const selectLoadingCars = createSelector(
  selectCarsFeature,
  (state: carState) => state.loading
);