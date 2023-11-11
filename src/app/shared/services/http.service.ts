import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AlertMessageService } from '../components/alert-message/alert-message.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private alertMessageService: AlertMessageService
  ) { }

  // Http POST request handler
  /**
   * 
   * @param url login api url name
   * @param data request array
   * @param flashFlag pass true or false
   * @returns login response
   */
  public loginPost(url: string, data: any, flashFlag: boolean = false): Observable<any> {
    return this.http.post(url, {}, {
      headers: {
        Authorization: `bearer ${data}`
      }
    }).pipe(
      map(
        (res: any) => {
          if (flashFlag) {
            this.alertMessageService.success('', res.message);
          }
          return res;
        }
      ),
      catchError((error: any) => {
        this.commonErrorHandler(error);
        return throwError(() => new Error(error));
      })
    );
  }

  // Http POST request handler
  /**
   * 
   * @param url api url name
   * @param data request
   * @param flashFlag true or false
   * @returns  api response
   */
  public post(url: string, data: any, flashFlag: boolean = false): Observable<any> {
    return this.http.post(url, data).pipe(
      map(
        (res: any) => {
          if (flashFlag) {
            this.alertMessageService.success('', res.message);
          }
          return res;
        }
      ),
      catchError((error: any) => {
        this.commonErrorHandler(error);
        return throwError(() => new Error(error));
      })
    );
  }

  // Http GET request handler
  /**
   * 
   * @param url api url name
   * @param params pass request details
   * @param flashFlag true or false
   * @returns response array
   */
  public get(url: string, params: any = {}, flashFlag: boolean = false): Observable<any> {
    return this.http.get(url, {
      params: params
    }).pipe(
      map(
        (res: any) => {
          if (flashFlag) {
            this.alertMessageService.success('', res.message);
          }
          return res;
        }
      ),
      catchError((error: any) => {
        this.commonErrorHandler(error);
        return throwError(() => new Error(error));
      })
    );
  }

  // Http PUT request handler
  public put(url: string, data: any, flashFlag: boolean = false): Observable<any> {
    return this.http.put(url, data).pipe(
      map(
        (res: any) => {
          if (flashFlag) {
            this.alertMessageService.success('', res.message);
          }
          return res;
        }
      ),
      catchError((error: any) => {
        this.commonErrorHandler(error);
        return throwError(() => new Error(error));
      })
    );
  }

  // Http DELETE request handler
  public delete(url: string, flashFlag: boolean = false): Observable<any> {
    return this.http.delete(url).pipe(
      map(
        (res: any) => {
          if (flashFlag) {
            this.alertMessageService.success('', res.message);
          }
          return res;
        }
      ),
      catchError((error: any) => {
        this.commonErrorHandler(error);
        return throwError(() => new Error(error));
      })
    );
  }

  // Common Error Handler
  private commonErrorHandler(error: any) {
    if (!error?.error?.messageType || error?.error?.messageType != 'warning') {
      let message = error?.error?.message || 'Something went wrong!';
      this.alertMessageService.error('', message);
    }
  }
}