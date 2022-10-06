import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilization'
})
export class UtilizationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}