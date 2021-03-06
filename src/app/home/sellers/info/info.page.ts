import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../../../interfaces/Sellers';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public upload = `${environment.api}/uploads/`
  public seller: Seller
  public propiedades = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.data.subscribe((response: any) => {      
      this.seller = response.seller.data.generales  
      this.propiedades = response.seller.data.propiedades
    });
  }

  ngOnInit() {
    
  }

  viewProperty = (i) => this.router.navigate(['home', 'properties', 'detail', this.propiedades[i].id])

  addProperty = () => this.router.navigate(['home', 'sellers', 'property', this.seller.id, 0])

}
