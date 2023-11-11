import { Injectable } from "@angular/core";
import { HttpResponse, HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoaderService } from "../services/loader.service";
import { AuthService } from "../services/auth.service";
import { AlertMessageService } from "../components/alert-message/alert-message.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];
    constructor(
        private loaderService: LoaderService,
        private authService: AuthService,
        private alertmessageservice: AlertMessageService
    ) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    generateHeader() {
        let headerData: any = {
            'Content-Type': 'application/json',
        };
        let token = this.authService.getAuthToken();
        if (token) {
            headerData['authorization'] = `Bearer ${token}`;
        }
        return headerData;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        req = req.clone({ url: req.url });
        // req = req.clone({
        //     setHeaders: this.generateHeader()
        // });
        this.requests.push(req);
        this.loaderService.isLoading.next(true);

        return new Observable((observer: any) => {
            const subscription = next.handle(req).subscribe({
                next: (event) => {
                    if (event instanceof HttpResponse) {
                        if (event?.body?.type === 'error' && event.body?.message) {
                            this.alertmessageservice.error('', event.body.message)
                        }
                        observer.next(event);
                    }
                },
                error: (err) => {
                    observer.error(err);
                    if (err?.error?.message) {
                        // this.alertmessageservice.error('',err.error.message)
                    }
                    this.removeRequest(req);
                    observer.complete();
                },
                complete: () => {
                    this.removeRequest(req);
                    observer.complete();
                }
            });

            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
