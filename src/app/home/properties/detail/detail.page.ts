import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propertie } from '../../../interfaces/Propertie';
import { PropertiesService } from '../../../services/properties.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public _propService: PropertiesService
  ) { 
    this.activatedRoute.data.subscribe((response: any) => {            
      this._propService.property = response.propertie.data 
    });
  }

  ngOnInit() {
    
  }

}
