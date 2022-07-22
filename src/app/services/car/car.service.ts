import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _commonService: CommonService) { }

  getCars() {
    return this._commonService.getAll("cars");
  }

  getOneCar(id: Number) {
    return this._commonService.getOne("cars", id);
  }

  getBrands() {
    return this._commonService.getAll("car-brand");
  }

  getModels() {
    return this._commonService.getAll("car-model");
  }

  getOwners() {
    return this._commonService.getAll("owners");
  }

  postCar(data: any) {
    console.log('>>>> En servicio')
    console.log(data)
    return this._commonService.postOne("cars", data);
  }


  newFakeCar(): Observable<any> {
    const car: CarModel  = {
      "id": 144,
      "patente": "OOM 028",
      "año": 2014,
      "marca_id": 1,
      "marca": {
        "id": 1,
        "nombre": "FIAT",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      "modelo_id": 1,
      "modelo": {
        "id": 1,
        "nombre": "PALIO FIRE",
        "marca_id": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      "propietario_id": 1,
      "propietario": {
        "id": 1,
        "nombre": "Celeste",
        "apellido": "Lavanda",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      "createdAt": new Date(),
      "updatedAt": new Date()
    }
    return of(car).pipe(
      delay(1000)
    )
  }

}
