import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyType, Estados, TipoOperacion } from '../../../interfaces/Propertie';
import { PropertiesService } from '../../../services/properties.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  public frmPropiedad: FormGroup
  public propertiesTypes: PropertyType[] = []
  public estados: Estados[] = []
  public tipoOperacion: TipoOperacion[] = []
  public areas: any[] = []

  constructor(
    private formbuilder: FormBuilder,
    private _propService: PropertiesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    
    
  }

  ngOnInit() {  
    this.route.data.subscribe((response: any) => {
      this.estados = response.states
      this.propertiesTypes = response.types
      this.tipoOperacion = response.operation_types
      this.areas = response.areas

      this.estados.unshift({id: 0, estado: '-- Todos --'})
      this.propertiesTypes.unshift({id: 0, tipo: '-- Todos --'})
      this.tipoOperacion.unshift({id: 0, tipo: '-- Todos --'})
      this.areas.unshift({id: 0, area: '-- Todas las areas --'})

      this.createForm()
    });
  }
  
  
  createForm = () => {
    this.frmPropiedad = this.formbuilder.group({            
      calle : this._propService.filters.calle,
      numero_exterior : this._propService.filters.numero_exterior,
      numero_interior : this._propService.filters.numero_interior,
      colonia : this._propService.filters.colonia,
      ciudad : this._propService.filters.ciudad,
      estado : this._propService.filters.estado,
      cp : this._propService.filters.cp,
      tipo_negocio : this._propService.filters.tipo_negocio,
      tipo_construccion : this._propService.filters.tipo_construccion,
      descripcion: this._propService.filters.descripcion,
      precio_desde: this._propService.filters.precio_desde,
      precio_hasta: this._propService.filters.precio_hasta,
      area_id: this._propService.filters.area_id,
    })
  }

  filter = () => {    
    this._propService.filters = this.frmPropiedad.value
    this.location.back()
  }

  clear_filter = () => {
    this.frmPropiedad.reset()
    this._propService.filters = this.frmPropiedad.value
    this.location.back()
  }
  

}
