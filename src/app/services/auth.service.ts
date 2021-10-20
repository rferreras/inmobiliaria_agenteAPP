import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User 
    
  constructor(
    private http: HttpClient
  ) { 
    this.getUser()
  }

  login = (data) => {
    return new Promise( resolve => {
      this.http.post(`${environment.api}/auth/login`, data).subscribe( resolve )
    })
  } 

  setUser = () => {
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  getUser = () => {
    const user = localStorage.getItem('user')
    if(user) this.user = JSON.parse(user)
  }

  logout() {
    localStorage.removeItem("user")
  }
  
}
