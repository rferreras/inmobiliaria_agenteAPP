import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(
    private http: HttpClient
  ) { }

  getProperties = (propertieId: number) => this.http.get(`${environment.api}/properties/getPropiedad/${propertieId}`)
}
