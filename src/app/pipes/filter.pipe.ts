import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true // default, I put it here just as a reminder.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, propertyName: string): any {
    if (value === undefined || value.length === 0 || filter === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propertyName].indexOf(filter) !== -1) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
