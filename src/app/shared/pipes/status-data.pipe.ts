import { Pipe, PipeTransform } from '@angular/core';
import { STATUS_LIST } from '../constants/app.constants';

@Pipe({
  name: 'statusData'
})
export class StatusDataPipe implements PipeTransform {
  statusList: any = STATUS_LIST;

  constructor() { }
  /**
   * 
   * @param status active or inactive
   * @param classRequired true or false
   * @returns class or label name
   */
  transform(status: string, classRequired: Boolean = false): String {
    const selectedStatus = this.statusList.find((element: any) => status === element?.status);
    return selectedStatus ? (classRequired ? selectedStatus.class : selectedStatus.label) : '-';

    // let result: any = '-';
    // try {
    //   const selectedStatus = this.statusList.find((element: any) => status === element.status);
    //   result = selectedStatus ? (classRequired ? selectedStatus.class : selectedStatus.label) : '-';
    //   return result;
    // } catch (error: any) {
    //   return result;
    // }
  }

}