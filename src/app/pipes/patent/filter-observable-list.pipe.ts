import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelModel } from '../../core/models/model.model';

@Pipe({
  name: 'filterObservableList'
})
export class FilterObservableListPipe implements PipeTransform {

  transform(lista: Observable<ModelModel[]>, value_to_filter: number): ModelModel[] {
    let aux: ModelModel[] = [];
    lista.subscribe(
      res => {
        aux = res.filter(model => model.marca_id == value_to_filter)
        return aux;
      }
      )
      return aux;
      
    }

}
