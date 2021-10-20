import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private _authService: AuthService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._authService.user) {
            request = request.clone({
              setHeaders: {
                Authorization: this._authService.user.token
              }
            });
        } else {
            console.log('No se cuenta con Token !!!!!');
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')        
        });
        
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                // console.log('event--->>>', JSON.stringify(event));
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(JSON.stringify(error));
                if (error.status === 401) {
                if (error.error.success === false) {
                    console.log('Login failed');
                } else {
                    this.router.navigate(['login']);
                }
                }
                return throwError(error);
        }));

        
    }
}