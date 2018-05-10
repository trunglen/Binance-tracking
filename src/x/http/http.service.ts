import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpEvent, HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SpinnerService } from '../../app/core/spinner/spinner.service';
@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient,
        private spinnerService: SpinnerService,
    ) { }
    
    Get<T>(url: string, params?: any) {
        this.spinnerService.show();
        return this.http.get<T>(url, { params: params }).finally(() => { this.spinnerService.hide() });
    }
    // .map(res => {
    //     return res['data'];
    // })
    Post<T>(url: string, body: any) {
        this.spinnerService.show();
        return this.http.post(url, body,{headers:new HttpHeaders({'Content-Type':'text/plain','Access-Control-Allow-Origin':'*'})}).finally(() => { this.spinnerService.hide() });
    }
}

@Injectable()
export class AuthHttpService implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken()}`
            },
        });
        return next.handle(req);
    }
}


@Injectable()
export class HttpErrorService implements HttpInterceptor {

    constructor(
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch((err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.error('An error accured', err.error.message);
            } else {
            }
            return Observable.throw(err);
        });
    }
}
