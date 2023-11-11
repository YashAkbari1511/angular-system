import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {

  constructor() { }
  /**
   * 
   * @param name get string value
   * @returns given first character of name from string
   */
  transform(name: string): String {
    return name?.length ? name[0] : '';
    // let result: any = '';
    // if (name && name.length > 0) {
    //   result = name[0];
    // }
    // return result;
  }
}
