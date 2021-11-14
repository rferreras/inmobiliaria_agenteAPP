import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PropertiesService } from '../../../../services/properties.service';
import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  public upload = `${environment.api}/uploads/`

  constructor(
    private _propService: PropertiesService,
    private _shareService: SharedService
  ) { }

  ngOnInit() {
  }

  addImage = () => {
    const image = this._shareService.takePicture()

    console.log(image)
  }

}
