import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BuyersService } from 'src/app/services/buyers.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public id
  public formulario: FormGroup
  buyer = {
    id: 0,
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    celular: '',
    comentarios: ''
  }

  constructor(
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private _buyersService: BuyersService,
    private _sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.data.subscribe((response: any) => {                            
      if(response.buyer.data.generales) this.buyer = response.buyer.data.generales    
      this.buildForm() 
    });

    // this.route.params.subscribe( res => {
    //   this.id = res.id       
    // })
    
  }

  ngOnInit() {
  }

  buildForm = () => {
    this.formulario = this.formbuilder.group({
      id : [this.buyer.id],
      nombre : [this.buyer.nombre, Validators.required],
      apellidos : [this.buyer.apellidos],
      correo : [this.buyer.correo, Validators.required],
      telefono : [this.buyer.telefono],
      celular : [this.buyer.celular],
      comentarios : [this.buyer.comentarios]
    })
  }

  guardarContacto = async() => {
    if(!this.formulario.valid) {
      if(this.formulario.controls.nombre.invalid) return this._sharedService.alert_simple('Nombre requerido', 'El nombre del comprador es requerido')
      if(this.formulario.controls.correo.invalid) return this._sharedService.alert_simple('Correo requerido', 'El correo del comprador es requerido')
      return
    }

    const res: any = await this._buyersService.addContacto(this.formulario.value)   
    this._sharedService.alert_simple(res.header, res.message)     
    if(!res.error) this.router.navigate(['home', 'buyers'])
  }

}
