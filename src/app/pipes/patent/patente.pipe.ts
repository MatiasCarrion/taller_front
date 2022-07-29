import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patente'
})
export class PatentePipe implements PipeTransform {

  transform(text: string, ...args: unknown[]): unknown {
    let patente;
    if (text.length === 6) {
      patente = text.substring(0,3)+ " " + text.substring(3,6);
    }
    if (text.length === 7) {
      patente = text.substring(0,2) + " " + text.substring(2,5) + " " + text.substring(5,7)
    }
    return patente?.toUpperCase();
  }

}
