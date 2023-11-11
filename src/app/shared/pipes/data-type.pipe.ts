import { Pipe, PipeTransform } from '@angular/core';
import { DATA_TYPE_LIST } from '../constants/app.constants';

@Pipe({
  name: 'dataType',
})
/**
 * return data type
 */
export class DataTypePipe implements PipeTransform {
  dataTypeList: any = DATA_TYPE_LIST;

  transform(dataType: string): string {
    const selectedDataType = this.dataTypeList.find((element: any) => dataType === element.type);
    return selectedDataType?.fieldType ? selectedDataType.fieldType : '';

    // let result: any = '';
    // this.dataTypeList.forEach((element: any) => {
    //   if (element?.type == dataType) {
    //     result = element.fieldType;
    //   }
    // });
    // return result;
  }
}
