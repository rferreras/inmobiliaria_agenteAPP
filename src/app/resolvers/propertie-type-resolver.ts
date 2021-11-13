import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PropertiesService } from '../services/properties.service';
 
@Injectable({
  providedIn: 'root'
})

export class PropertyTypeResolverService implements Resolve<any> {
  constructor(
      private _propertiesService: PropertiesService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {      
    return this._propertiesService.getPropertiesTypes().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
