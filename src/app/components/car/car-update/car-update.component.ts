import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  id: any;

  constructor(private rutaActiva: ActivatedRoute,
              private _carService: CarService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.id ? this.getOneCar(this.id) : null;
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
