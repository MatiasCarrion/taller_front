import { createAction, props } from '@ngrx/store';
import { BrandModel } from 'src/app/core/models/brand.model';
import { ModelModel } from 'src/app/core/models/model.model';
import { OwnerModel } from 'src/app/core/models/owner.model';
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

export const loadBrands = createAction(
  '[Brands List] Load Brands',
);

export const loadedBrands = createAction(
    '[Brands List] Loaded Success',
    props<{ brands: BrandModel[] }>()
);

export const loadModels = createAction(
  '[Models List] Load Models',
);

export const loadedModels = createAction(
    '[Models List] Loaded Success',
    props<{ models: ModelModel[] }>()
);

export const loadOwners = createAction(
  '[Owners List] Load Owners',
);

export const loadedOwners = createAction(
    '[Owners List] Loaded Success',
    props<{ owners: OwnerModel[] }>()
);