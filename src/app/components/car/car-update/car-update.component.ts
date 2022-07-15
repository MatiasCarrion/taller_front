import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { AppState } from 'src/app/state/app.state';
import { selectOneCar } from 'src/app/state/selectors/car.selectors';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  id: number = 0;
  car$: Observable<CarModel> = new Observable();

  constructor(private rutaActiva: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    if (this.id) {
      this.car$ = this.store.select(selectOneCar, this.id)
    }
    else {
      null
    };
  }

}
