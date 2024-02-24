import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(ary: any, fn: Function = (a: any, b: any) => a > b ? 1 : -1): any {
    return ary.sort(fn);
  }

}
