import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PropertiesService } from '../../services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  public upload = `${environment.api}/uploads/`
  propiedades = []
  public badges = [
    { tipo: 'Venta', color: 'success' },
    { tipo: 'Renta', color: 'primary' },
  ]
  public filter_count = 0
  private page = 0

  constructor(
    private _propertiesService: PropertiesService,
    private router: Router
  ) { 
   
    // count object property with value is not null
   
  }

  ionViewWillEnter() {
    this.filter_count = 0
    Object.keys(this._propertiesService.filters).forEach(key => {
      if(this._propertiesService.filters[key]) this.filter_count++
    })

    this.getProperties()
  }

  ngOnInit() {}
  
  viewProperty = (i: any) => this.router.navigate(['home', 'properties', 'detail', this.propiedades[i].id])

  viewFilters = () => this.router.navigate(['home', 'properties', 'filters'])

  getProperties = async() => {
    const propiedades: any = await this._propertiesService.getPropertiesSearch({ page: this.page, filters: JSON.stringify(this._propertiesService.filters) }).toPromise()
    this.propiedades = propiedades.registros
    console.log(this.propiedades)
  }

  getBadge = (tipo: string) => this.badges.find(badge => badge.tipo === tipo).color

}
