import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public upload = `${environment.api}/uploads/`
  public buyers
  public propiedades = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.data.subscribe((response: any) => {      
      this.buyers = response.buyer.data.generales  
      this.propiedades = response.buyer.data.propiedades
    });
  }

  ngOnInit() {
  }

  editBuyer = () => {
    this.router.navigate(['home', 'buyers', 'edit', this.buyers.id])
  }

  viewProperty = (i: number) => this.router.navigate(['home', 'properties', 'detail', this.propiedades[i].id])

}
