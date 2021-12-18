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
    
    const data_img = {
      property_id: this._propService.property.id,
      image: image
    }
    
    const loading: any = await this._shareService.presentLoading()
    const resp: any = await this._propService.uploadImage(data_img)    
    if(resp.error) return this._shareService.alert_simple(resp.header, resp.message) 
    
    const data_s3 = {
      property_id: this._propService.property.id,
      url: resp.url
    }
    const resp_s3: any = await this._propService.saveImage(data_s3)
    if(resp_s3.error) return this._shareService.alert_simple(resp.header, resp.message) 

    this._propService.getProperties(parseInt(this._propService.property.id)).subscribe( (res:any) => {
      this._propService.property = res.data
      console.log(res)
      loading.dismiss()
    })
  }

  addMedia = async() => {
    this._shareService.capture()
  }

}
