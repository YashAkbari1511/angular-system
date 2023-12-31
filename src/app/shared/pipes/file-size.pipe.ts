import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  /**
   * 
   * @param bytes get numeric value
   * @param decimals 
   * @returns file size
   */
  transform(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
}
