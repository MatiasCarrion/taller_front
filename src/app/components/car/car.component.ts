import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  loading: boolean = true;
  list_cars: any = [];

  constructor(private _carService: CarService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCars();
  }

  getCars() {
    try {
      this._carService.getCars().subscribe(
        res => {
          this.list_cars = res;
          console.log(this.list_cars)
          this.loading = false;
        },
        err => {
          console.error(err)
        }

      )
    } catch (error) {
      
    }
  }

}
