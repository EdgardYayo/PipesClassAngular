import { Pipe, PipeTransform } from '@angular/core';
import { reduce } from 'rxjs-compat/operator/reduce';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {

    if(value.length === 0) {
      return value;
    }

    return value.sort((a, b) => {
      if(a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
    
  }

}
