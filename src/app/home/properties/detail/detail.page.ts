import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propertie } from '../../../interfaces/Propertie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public property: Propertie

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.data.subscribe((response: any) => {      
      this.property = response.propertie.data      
    });
  }

  ngOnInit() {
    console.log(this.property)
  }

}
