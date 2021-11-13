import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../../services/properties.service';
import { PropertyType, Estados, TipoOperacion } from '../../../interfaces/Propertie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {
  private sellerId = 0
  public propertyId = 0
  public propertiesTypes: PropertyType[] = []
  public estados: Estados[] = []
  public tipoOperacion: TipoOperacion[] = []
  public frmPropiedad: FormGroup

  constructor(
    private route: ActivatedRoute,
    private _propService: PropertiesService,
    private formbuilder: FormBuilder,
    private _sharedService: SharedService
  ) { 
    this.sellerId = this.route.snapshot.params.sellerId
    this.propertyId = this.route.snapshot.params.id
    this.createForm()
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {      
      this.estados = response.states
      this.propertiesTypes = response.types
      this.tipoOperacion = response.operation_types
    });
  }

  createForm = () => {
    this.frmPropiedad = this.formbuilder.group({
      id : [0],
      vendedor_id: [this.sellerId],
      calle : ['', Validators.required],
      numero_exterior : ['', Validators.required],
      numero_interior : [''],
      colonia : [''],
      ciudad : ['', Validators.required],
      estado : ['18', Validators.required],
      cp : [''],
      tipo_negocio : ['', Validators.required],
      tipo_construccion : ['', Validators.required],
      descripcion: [''],
    })
  }

  getPropertiesTypes = () => this._propService.getPropertiesTypes().subscribe( (res: PropertyType[]) => this.propertiesTypes = res )
  getEstados = () => this._propService.getEstados().subscribe( (res: Estados[]) => this.estados = res )
  getTiposOperacion = () => this._propService.getTiposOperacion().subscribe( (res: TipoOperacion[]) => this.tipoOperacion = res )

  guardar = async() => {
    if(!this.frmPropiedad.valid) return this._sharedService.alert_simple('Falta información', 'Es necesario que proporcione la información mínima de la propiedad')
    
    const resp = await this._propService.guardarPropiedad(this.frmPropiedad.value)
    console.log(resp)
  }

}
