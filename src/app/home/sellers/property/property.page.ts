import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from '../../../services/properties.service';
import { PropertyType, Estados, TipoOperacion, Propertie } from '../../../interfaces/Propertie';
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
  private property: Propertie

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _propService: PropertiesService,
    private formbuilder: FormBuilder,
    private _sharedService: SharedService
  ) { 
    this.sellerId = this.route.snapshot.params.sellerId
    this.propertyId = this.route.snapshot.params.id    
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {      
      this.estados = response.states
      this.propertiesTypes = response.types
      this.tipoOperacion = response.operation_types
      this.property = response.propertie.data
      
      console.log(this.property)
      this.createForm()
    });
  }

  createForm = () => {
    this.frmPropiedad = this.formbuilder.group({
      id : [this.property?.id],
      vendedor_id: [this.sellerId],
      calle : [this.property?.calle, Validators.required],
      numero_exterior : [this.property?.numero_exterior, Validators.required],
      numero_interior : [this.property?.numero_interior],
      colonia : [this.property?.colonia],
      ciudad : [this.property?.ciudad, Validators.required],
      estado : [this.property?.estado || '18', Validators.required],
      cp : [this.property?.cp],
      tipo_negocio : [this.property?.tipo_negocio, Validators.required],
      tipo_construccion : [this.property?.tipo_construccion, Validators.required],
      descripcion: [this.property?.descripcion],
    })
  }

  getPropertiesTypes = () => this._propService.getPropertiesTypes().subscribe( (res: PropertyType[]) => this.propertiesTypes = res )
  getEstados = () => this._propService.getEstados().subscribe( (res: Estados[]) => this.estados = res )
  getTiposOperacion = () => this._propService.getTiposOperacion().subscribe( (res: TipoOperacion[]) => this.tipoOperacion = res )

  guardar = async() => {
    if(!this.frmPropiedad.valid) return this._sharedService.alert_simple('Falta información', 'Es necesario que proporcione la información mínima de la propiedad')
    
    const resp: any = await this._propService.guardarPropiedad(this.frmPropiedad.value)
    this._sharedService.alert_simple(resp.header, resp.message)
    
    if(resp.error) return
    this.propertyId = resp.property_id
    this.frmPropiedad.patchValue({id: resp.property_id})
    
  }

}
