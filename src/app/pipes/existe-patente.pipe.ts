import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../core/models/car.model';

@Pipe({
  name: 'existePatente'
})
export class ExistePatentePipe implements PipeTransform {

  transform(patente: string, lista_autos: Observable<CarModel[]>): unknown {

    if (patente.length === 6 || patente.length === 7) {
      let autos: any[] = [];
      lista_autos.subscribe(
        res => {
          autos = res;
        }
      )
      let patentes: any[] = [];
      autos.forEach(a => patentes.push(a.patente))
      if (patentes.includes(patente.toUpperCase())) {
        console.log('true')
        return true
      }
      else {
        console.log('false')
        return false;
      }
    }

    return false;
  }

}
