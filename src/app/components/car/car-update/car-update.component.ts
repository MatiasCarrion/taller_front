import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, pipe } from 'rxjs';
import { BrandModel } from 'src/app/core/models/brand.model';
import { CarModel } from 'src/app/core/models/car.model';
import { ModelModel } from 'src/app/core/models/model.model';
import { OwnerModel } from 'src/app/core/models/owner.model';
import { addingCar, loadBrands, loadCars, loadModels, loadOwners, updatingCar } from 'src/app/state/actions/cars.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListBrands, selectListCars, selectListModels, selectListOwners, selectOneCar } from 'src/app/state/selectors/car.selectors';
import Swal, { SweetAlertIcon } from 'sweetalert2';

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
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(loadBrands());
    this.store.dispatch(loadModels());
    this.store.dispatch(loadOwners());
    this.store.dispatch(loadCars());
    this.list_brands$ = this.store.select(selectListBrands);
    this.list_models$ = this.store.select(selectListModels);
    this.list_owners$ = this.store.select(selectListOwners);
    this.list_cars$ = this.store.select(selectListCars);

    this.formCar = new FormGroup({
      patente: new FormControl('', (Validators.pattern('([a-zA-Z]{2}[\\d]{3}[a-zA-Z]{2})|([a-zA-Z]{3}[\\d]{3})'), Validators.required)), // valida cadenas AA123AA ó OAM123
      año: new FormControl('', (Validators.min(1950), Validators.max(new Date().getFullYear()))),
      marca_id: new FormControl('', Validators.required),
      modelo_id: new FormControl('', Validators.required),
      propietario_id: new FormControl('', Validators.required)
    })

    this.id = this.rutaActiva.snapshot.params['id'];

    if (this.id) {
      this.car$ = this.store.select(selectOneCar, this.id);
      this.car$.subscribe(
        car => {
          this.formCar.controls['patente'].setValue(car.patente);
          this.formCar.controls['año'].setValue(car.año);
          this.formCar.controls['marca_id'].setValue(car.marca_id);
          this.formCar.controls['modelo_id'].setValue(car.modelo_id);
          this.formCar.controls['propietario_id'].setValue(car.propietario_id);
        }
      )
      this.formCar.controls['patente'].disable();
      this.formCar.controls['año'].disable();
      this.formCar.controls['marca_id'].disable();
      this.formCar.controls['modelo_id'].disable();
    }
    else {
      null
    };

  }

  updateCar() {
    console.log(this.formCar.value, this.id)
    this.store.dispatch(updatingCar({car: this.formCar.value, id: this.id}));
    this.cleanForm();
    this.showMessage('success','Congratulations...','Car updated with success!','autos')

  }

  saveCar() {
    this.store.dispatch(addingCar(this.formCar.value));
    this.cleanForm();
    this.showMessage('success','Congratulations...','Car added with success!','autos')
  }

  showMessage(icon: SweetAlertIcon, title: string, text: string, path: string) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    })
    .then(
      () => this.router.navigate([path])
    )
  }

  cleanForm() {
    this.formCar.controls['patente'].setValue('');
    this.formCar.controls['año'].setValue(null);
    this.formCar.controls['marca_id'].setValue(null);
    this.formCar.controls['modelo_id'].setValue(null);
    this.formCar.controls['propietario_id'].setValue(null);
  }

  validationPatent() {
    const input_value = this.formCar.controls['patente'].value;
    const valid = RegExp('([\\d])|([a-zA-Z])');
    if (!valid.test(input_value[input_value.length - 1])) {
      this.formCar.controls['patente'].setValue(input_value.substring(0, input_value.length - 1))
    }
  }

  existsPatent() {
    const input_value = this.formCar.controls['patente'].value;

    if (input_value.length === 6 || input_value.length === 7) {

      let autos: any[] = [];
      this.list_cars$.subscribe(
        res => {
          autos = res;
        }
      )
      let patentes: any[] = [];
      autos.forEach(a => patentes.push(a.patente))
      if (patentes.includes(input_value.toUpperCase())) {
        return true
      }
      else {
        return false;
      }
    }

    return false;
  }

//   filtrarListaModelos() {
//     const marca_id = this.formCar.controls['marca_id'].value;
//     let aux = this.list_models$.forEach(
//       oneModel => {
//         oneModel.filter(model => model.marca_id == marca_id)
//       }
//     )
// console.log(aux)
//   }

}
