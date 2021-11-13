import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public id
  public formulario: FormGroup

  constructor(
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {         
    this.route.params.subscribe( res => {
      this.id = res.id 
      this.buildForm()
    })        
  }

  buildForm = () => {
    this.formulario = this.formbuilder.group({
      id : [this.id],
      nombre : ['', Validators.required],
      apellidos : [''],
      correo : ['', Validators.required],
      telefono : [''],
      celular : [''],
      comentarios : ['']
    })
  }

  ngOnInit() {
  }

}
