import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  

  constructor(private _commonService: CommonService) { }

  getCars() {
    return this._commonService.getAll("cars")
  }

  getOneCar(id: Number) {
    return this._commonService.getOne("cars", id);
  }
}
