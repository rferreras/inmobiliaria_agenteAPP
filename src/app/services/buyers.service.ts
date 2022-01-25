import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  constructor(
    private http: HttpClient
  ) { }

  getBuyers = (data)=> {
    return new Promise( resolve => {
      this.http.get(`${environment.api}/buyers/getBuyers`, data).subscribe( resolve )
    })
  }

  getBuyer = (buyerId)=> this.http.get(`${environment.api}/buyers/getBuyer/${buyerId}`)

  addContacto = (data)=> {
    return new Promise( resolve => {
      this.http.post(`${environment.api}/buyers/addBuyer`, data).subscribe( resolve )
    })
  }

}
