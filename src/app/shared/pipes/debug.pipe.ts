import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debug',
})
export class DebugPipe implements PipeTransform {

  constructor() {}

  transform(data: any): unknown {
    console.log(data);
    return null;
  }
}
