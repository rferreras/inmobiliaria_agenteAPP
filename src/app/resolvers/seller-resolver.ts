import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SellersService } from '../services/sellers.service';
 
@Injectable({
  providedIn: 'root'
})

export class SellerResolverService implements Resolve<any> {
  constructor(
      private _sellerService: SellersService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {    
    return this._sellerService.getSeller(route.params.id).pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
