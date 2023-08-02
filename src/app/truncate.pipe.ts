import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 25): string {
    if (value.length <= limit) {
      return value;
    } else {
      return value.substr(0, limit) + '...';
    }
  }
}