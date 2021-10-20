import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public credentials = {
    email: 'rferreras@gmail.com',
    contrasena: 'Polelo01'
  }
  constructor(
    private router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  login = async() => {

    const login: any = await this._authService.login(this.credentials)
    if(login.error) return

    this._authService.user = {
      id: login.data.id,
      nombre: login.data.nombre,
      apellidos: login.data.apellidos,
      correo: login.data.correo,
      token: login.token
    }
    this._authService.setUser()
    
    this.router.navigate(['home'])
  }

}
