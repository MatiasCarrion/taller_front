import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { BrandModel } from 'src/app/core/models/brand.model';
import { CarModel } from 'src/app/core/models/car.model';
import { ModelModel } from 'src/app/core/models/model.model';
import { OwnerModel } from 'src/app/core/models/owner.model';
import { CarService } from 'src/app/services/car/car.service';
import { addingCar, loadBrands, loadCars, loadModels, loadOwners } from 'src/app/state/actions/cars.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListBrands, selectListCars, selectListModels, selectListOwners, selectOneCar } from 'src/app/state/selectors/car.selectors';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  formCar: FormGroup = new FormGroup('');
  id: number = 0;
  loading$: Observable<boolean> = new Observable();
  car$: Observable<CarModel> = new Observable();
  list_brands$: Observable<BrandModel[]> = new Observable();
  list_models$: Observable<ModelModel[]> = new Observable();
  list_owners$: Observable<OwnerModel[]> = new Observable();
  list_cars$: Observable<CarModel[]> = new Observable();

  constructor(private rutaActiva: ActivatedRoute,
              private store: Store<AppState>,
              private _carService: CarService) { }

  ngOnInit(): void {

    this.store.dispatch(loadBrands());
    this.store.dispatch(loadModels());
    this.store.dispatch(loadOwners());
    this.store.dispatch(loadCars());
    this.list_brands$ = this.store.select(selectListBrands);
    this.list_models$ = this.store.select(selectListModels);
    this.list_owners$ = this.store.select(selectListOwners);
    this.list_cars$ = this.store.select(selectListCars);
    
    this.id = this.rutaActiva.snapshot.params['id'];
    if (this.id) {
      this.car$ = this.store.select(selectOneCar, this.id)
    }
    else {
      null
    };

    this.formCar = new FormGroup({
      patente: new FormControl('', (Validators.pattern('([a-zA-Z]{2}[\\d]{3}[a-zA-Z]{2})|([a-zA-Z]{3}[\\d]{3})'), Validators.required)), // valida cadenas AA123AA ó OAM123
      año: new FormControl('',( Validators.min(1950), Validators.max(new Date().getFullYear()) )),
      marca_id: new FormControl('', Validators.required),
      modelo_id: new FormControl('', Validators.required),
      propietario_id: new FormControl('', Validators.required)
    })
  }

  saveCar() {
    // this.store.dispatch(addingCar(this.formCar.value));

    this._carService.postCar(this.formCar.value).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }


}
