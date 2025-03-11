import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntoFinal'
})
export class PuntoFinalPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.endsWith('.') ? value : value + '.';
  }
}