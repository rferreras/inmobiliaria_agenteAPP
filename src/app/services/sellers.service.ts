import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(
    private http: HttpClient
  ) { }

  getSellers = (data)=> {
    return new Promise( resolve => {
      this.http.get(`${environment.api}/sellers/getSellers`, data).subscribe( resolve )
    })
  } 

  getSeller = (sellerId: number) => this.http.get(`${environment.api}/sellers/getSeller/${sellerId}`)

}
