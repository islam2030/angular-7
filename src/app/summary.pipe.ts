import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, limit?: any): any {
    let Limit = (limit) ? limit : 20;
    return value.substr(0,Limit) + '....';
  }
}
