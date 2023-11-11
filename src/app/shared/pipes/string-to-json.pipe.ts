import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'stringToJson',
})
export class StringToJsonPipe implements PipeTransform {
  /**
   * 
   * @param value get value
   * @returns value convert in json format
   */
  transform(value: any): any {
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return [];
      }
    } else {
      return [];
    }
  }
}
