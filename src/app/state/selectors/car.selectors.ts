import { createSelector, createFeatureSelector } from '@ngrx/store';
import { carState } from 'src/app/core/states/car.state';
import { AppState } from '../app.state';
 
export const selectCarsFeature = (state: AppState) => state.carsList;
 
export const selectListCars = createSelector(
  selectCarsFeature,
  (state: carState) => state.cars
);

export const selectLoadingCars = createSelector(
  selectCarsFeature,
  (state: carState) => state.loading
);