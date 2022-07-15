import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CarService } from '../../services/car/car.service'

@Injectable()
export class CarEffects {
    
    constructor(
      private actions$: Actions,
      private _carService: CarService,
    ) {}

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
    mergeMap(() => this._carService.newFakeCar()
      .pipe(
        map(car => ({ type: '[Cars List] Car Add Success', car })),
        catchError(() => EMPTY)
      ))
    )
  );

}