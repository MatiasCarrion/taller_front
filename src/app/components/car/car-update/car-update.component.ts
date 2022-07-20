import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { BrandModel } from 'src/app/core/models/brand.model';
import { CarModel } from 'src/app/core/models/car.model';
import { ModelModel } from 'src/app/core/models/model.model';
import { OwnerModel } from 'src/app/core/models/owner.model';
import { loadBrands, loadModels, loadOwners } from 'src/app/state/actions/cars.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListBrands, selectListModels, selectListOwners, selectOneCar } from 'src/app/state/selectors/car.selectors';

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

  constructor(private rutaActiva: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(loadBrands());
    this.store.dispatch(loadModels());
    this.store.dispatch(loadOwners());
    this.list_brands$ = this.store.select(selectListBrands);
    this.list_models$ = this.store.select(selectListModels);
    this.list_owners$ = this.store.select(selectListOwners);
    
    this.id = this.rutaActiva.snapshot.params['id'];
    if (this.id) {
      this.car$ = this.store.select(selectOneCar, this.id)
    }
    else {
      null
    };

    this.formCar = new FormGroup({
      patente: new FormControl('', (Validators.pattern('([a-zA-Z]{2}[\\d]{3}[a-zA-Z]{2})|([a-zA-Z]{3}[\\d]{3})'))), // valida cadenas AA123AA ó OAM123
      marca: new FormControl(),
      modelo: new FormControl(),
      propietario: new FormControl()
    })
  }


}
