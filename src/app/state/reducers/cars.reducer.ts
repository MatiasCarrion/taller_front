import { createReducer, on } from '@ngrx/store';
import { carState } from 'src/app/core/states/car.state';
import { addedCar, addingCar, loadBrands, loadCars, loadedBrands, loadedCars, loadedModels, loadedOwners, loadModels, loadOwners } from '../actions/cars.actions';


export const initialState: carState = { loading: false, cars: [], brands: [], models: [], owners: [] };

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
  on(addingCar, (state, { car }) => {
    return {
      ...state,
      loading: true,
      cars: [car, ...state.cars]
    }
  }),
  on(addedCar, (state) => {
    return {
      ...state,
      loading: false    }
  }),
  on(loadBrands, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadedBrands, (state, { brands }) => {
    return {
      ...state,
      loading: false,
      brands
    }
  }),
  on(loadModels, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadedModels, (state, { models }) => {
    return {
      ...state,
      loading: false,
      models
    }
  }),
  on(loadOwners, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadedOwners, (state, { owners }) => {
    return {
      ...state,
      loading: false,
      owners
    }
  })
);