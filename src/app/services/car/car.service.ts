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
