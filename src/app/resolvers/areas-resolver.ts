import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PropertiesService } from '../services/properties.service';
 
@Injectable({
  providedIn: 'root'
})

export class AreasResolverService implements Resolve<any> {
  constructor(
      private _propertiesService: PropertiesService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {      
    return this._propertiesService.getAreas().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
