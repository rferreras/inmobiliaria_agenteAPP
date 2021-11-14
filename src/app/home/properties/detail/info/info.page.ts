import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Propertie } from '../../../../interfaces/Propertie';
import { PropertiesService } from '../../../../services/properties.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public upload = `${environment.api}/uploads/`

  constructor(
    private _propService: PropertiesService
  ) { 
    
  }

  ngOnInit() {
  }

}
