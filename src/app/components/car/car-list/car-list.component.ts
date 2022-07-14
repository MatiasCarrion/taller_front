import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  loading: boolean = true;
  list_cars: any = [];

  constructor(private router: Router,
              private _carService: CarService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCars();
  }

  getCars() {
    try {
      this._carService.getCars().subscribe(
        res => {
          this.list_cars = res;
          console.log(res);
          this.loading = false;
        },
        err => {
          console.error(err)
        }

      )
    } catch (error) {
      
    }
  }

  redirigir(path: string) {
    this.router.navigate([path])
  }

}
