import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { CarService } from '../../services/car/car.service'

@Injectable()
export class CarEffects {
    
    constructor(
      private actions$: Actions,
      private _carService: CarService,
      private _commonService: CommonService
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

}