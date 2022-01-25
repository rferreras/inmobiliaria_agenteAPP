import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BuyersService } from '../services/buyers.service';
 
@Injectable({
  providedIn: 'root'
})

export class BuyerResolverService implements Resolve<any> {
  constructor(
      private _buyersServuce: BuyersService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {        
    return this._buyersServuce.getBuyer(route.params.id).pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
