import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PropertiesService } from '../services/properties.service';
 
@Injectable({
  providedIn: 'root'
})

export class PropertieResolverService implements Resolve<any> {
  constructor(
      private _propertiesService: PropertiesService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {    
    return this._propertiesService.getProperties(route.params.id).pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
