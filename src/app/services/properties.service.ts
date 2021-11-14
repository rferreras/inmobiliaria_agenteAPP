import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Estados, TipoOperacion, Propertie } from '../interfaces/Propertie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  public property: Propertie

  constructor(
    private http: HttpClient
  ) { }

  getProperties = (propertieId: number) => this.http.get(`${environment.api}/properties/getPropiedad/${propertieId}`)
  getPropertiesTypes = (): Observable<TipoOperacion[]> => this.http.get<TipoOperacion[]>(`${environment.api}/properties/getPropiedadesTipos`)
  getEstados = (): Observable<Estados[]> => this.http.get<Estados[]>(`${environment.api}/properties/getEstados`)
  getTiposOperacion = (): Observable<TipoOperacion[]> => this.http.get<TipoOperacion[]>(`${environment.api}/properties/getTiposOperacion`)
  guardarPropiedad = (data: any) => {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.api}/properties/guardarPropiedad`, data)
      .pipe(map((resp: any) => resp))
      .subscribe(resolve, reject)
    })
  }
}
