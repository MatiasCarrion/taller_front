import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute,
              private _carService: CarService) { }

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params['id'];
    this.getOneCar(id);
  }


  getOneCar(id: Number) {
    try {
      this._carService.getOneCar(id).subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.error(err)
        }
      )
    } catch (error) {
      console.error(error)
    }
  }


}
