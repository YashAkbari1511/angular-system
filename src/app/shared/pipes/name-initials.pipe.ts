import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {
  /**
   * 
   * @param value get string value
   * @returns give first character of after space from value
   */
  transform(value: string): unknown {
    return value.split(' ').map(n => n[0]).join('');
  }

}
