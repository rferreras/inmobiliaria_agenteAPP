import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User 
  
  constructor() { }
}
