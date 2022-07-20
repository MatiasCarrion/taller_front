import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { addingCar, loadCars } from 'src/app/state/actions/cars.actions';
import { selectListCars, selectLoadingCars } from 'src/app/state/selectors/car.selectors';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  list_cars$: Observable<any> = new Observable();

  constructor(private router: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoadingCars);
    this.store.dispatch(loadCars());
    this.list_cars$ = this.store.select(selectListCars);
  }

  nuevo() {
    this.store.dispatch(addingCar());
  }

  redirigir(path: string) {
    this.router.navigate([path])
  }

}
