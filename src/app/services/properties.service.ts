import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Estados, TipoOperacion, Propertie, Documentos } from '../interfaces/Propertie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  public property: Propertie
  public filters = {
      calle : '',
      numero_exterior : '',
      numero_interior : '',
      colonia : '',
      ciudad : '',
      estado : '',
      cp : '',
      tipo_negocio : '',
      tipo_construccion : '',
      descripcion: '',
      precio_desde: '',
      precio_hasta: '',
      area_id: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  getProperties = (propertieId: number) => this.http.get(`${environment.api}/properties/getPropiedad/${propertieId}`)
  getPropertiesSearch = (params: any) => this.http.get(`${environment.api}/properties/getPropiedades`, { params: params })
  getPropertiesTypes = (): Observable<TipoOperacion[]> => this.http.get<TipoOperacion[]>(`${environment.api}/properties/getPropiedadesTipos`)
  getEstados = (): Observable<Estados[]> => this.http.get<Estados[]>(`${environment.api}/properties/getEstados`)
  getTiposOperacion = (): Observable<TipoOperacion[]> => this.http.get<TipoOperacion[]>(`${environment.api}/properties/getTiposOperacion`)
  getAreas = (): Observable<any[]> => this.http.get<any[]>(`${environment.api}/properties/getAreas`)

  guardarPropiedad = (data: any) => {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.api}/properties/guardarPropiedad`, data)
      .pipe(map((resp: any) => resp))
      .subscribe(resolve, reject)
    })
  }
  
  uploadImage = (data: any) => {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.upload}`, data)
      .pipe(map((resp: any) => resp))
      .subscribe(resolve, reject)
    })
  }

  saveImage = (data: any) => {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.api}/properties/saveImage`, data)
      .pipe(map((resp: any) => resp))
      .subscribe(resolve, reject)
    })
  }

  saveDocumento = (data: any) => {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.api}/properties/saveDocumento`, data)
      .pipe(map((resp: any) => resp))
      .subscribe(resolve, reject)
    })
  }

  
}
