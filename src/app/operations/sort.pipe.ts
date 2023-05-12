import { Pipe, PipeTransform } from '@angular/core';
import { Operation } from './operation';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Operation[]): Operation[] {
    if (value) {
      return value.sort((a: Operation, b: Operation) => {
        if (a.name < b.name) {
          return -1;
        } else if (b.name < a.name) {
          return 1;
        }

        return 0;
      });
    }

    return [];
  }

}
