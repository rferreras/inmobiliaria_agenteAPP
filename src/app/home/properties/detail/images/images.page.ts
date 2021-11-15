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

  addImage = async() => {
    const image = await this._shareService.takePicture()
    const data = {
      property_id: this._propService.property.id,
      image: image
    }
    
    const loading: any = await this._shareService.presentLoading()
    const resp: any = await this._propService.uploadImage(data)    
    if(resp.error) return this._shareService.alert_simple(resp.header, resp.message) 

    this._propService.getProperties(parseInt(this._propService.property.id)).subscribe( (res:any) => {
      this._propService.property = res.data
      console.log(res)
      loading.dismiss()
    })
  }

}
