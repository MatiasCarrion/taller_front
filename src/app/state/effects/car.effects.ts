import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { CarService } from '../../services/car/car.service'
import { addingCar } from '../actions/cars.actions';

@Injectable()
export class CarEffects {

  constructor(
    private actions$: Actions,
    private _carService: CarService,
  ) { }

  loadCars$ = createEffect(() => this.actions$.pipe(
    ofType('[Cars List] Load Cars'),
    mergeMap(() => this._carService.getCars()
      .pipe(
        map(cars => ({ type: '[Cars List] Loaded Success', cars })),
        catchError(() => EMPTY)
      ))
  )
  );

  addingCar$ = createEffect(() => this.actions$.pipe(
    ofType('[Cars List] Add Car in progress'),
    mergeMap((car) => this._carService.postCar(car)
      .pipe(
        map(car => ({ type: '[Cars List] Car Add Success', car })),
        // catchError(() => of({ type: '[Cars List] Car Add Failed' }))
        catchError((error) => {throw new Error(error.message)} )
      )
    )
  )
  );

  updatingCar$ = createEffect(() => this.actions$.pipe(
    ofType('[Cars List] Updating Car in progress'),
    mergeMap((car, id) => this._carService.patchCar(car, 1)
      .pipe(
        map(car => ({ type: '[Cars List] Car Update Success', car })),
        // catchError(() => of({ type: '[Cars List] Car Add Failed' }))
        catchError((error) => {throw new Error(error.message)} )
      )
    )
  )
  );

  loadBrands$ = createEffect(() => this.actions$.pipe(
    ofType('[Brands List] Load Brands'),
    mergeMap(() => this._carService.getBrands()
      .pipe(
        map(brands => ({ type: '[Brands List] Loaded Success', brands })),
        catchError(() => EMPTY)
      ))
  )
  );

  loadModels$ = createEffect(() => this.actions$.pipe(
    ofType('[Models List] Load Models'),
    mergeMap(() => this._carService.getModels()
      .pipe(
        map(models => ({ type: '[Models List] Loaded Success', models })),
        catchError(() => EMPTY)
      ))
  )
  );

  loadOwners$ = createEffect(() => this.actions$.pipe(
    ofType('[Owners List] Load Owners'),
    mergeMap(() => this._carService.getOwners()
      .pipe(
        map(owners => ({ type: '[Owners List] Loaded Success', owners })),
        catchError(() => EMPTY)
      ))
  )
  );

}