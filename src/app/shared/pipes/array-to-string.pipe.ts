import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'arrayToString',
})
/**
 * convert array to string
 */
export class ArrayToStringPipe implements PipeTransform {
  transform(arrayValue: any, type: any = null): String {
    let result = ``;
    if (arrayValue && arrayValue.length > 0) {
      const joinWith = (type === 'noAnd') ? ', ' : ' and ';
      result = arrayValue.join(joinWith);
      // arrayValue.forEach((element: any, index: Number) => {
      //   if (!result) {
      //     result += element;
      //   } else if (index == arrayValue.length - 1) {
      //     if (type == 'noAnd') {
      //       result += `, ${element}`;
      //     } else {
      //       result += ` and ${element}`;
      //     }
      //   } else {
      //     result += `, ${element}`;
      //   }
      // });
    }
    return result;
  }
}
