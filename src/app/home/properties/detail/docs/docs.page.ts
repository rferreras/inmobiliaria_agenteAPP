import { Component, NgZone, OnInit } from '@angular/core';
import { PropertiesService } from '../../../../services/properties.service';
import { AlertController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {
  
  constructor(
    private _propService: PropertiesService,
    private alertController: AlertController,
    private _shareService: SharedService,
    private ngZone: NgZone,
    private photoViewer: PhotoViewer
  ) { }
  

  ngOnInit() {
  }

  verDocumento(documento) {    
    this.photoViewer.show(documento);
  }

  async addDocumento() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agregar documento',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Introduzca el nombre del documento'
        }        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: async(data) => {
            if(!data.nombre) return console.log('no hacemos nada')

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
              nombre: data.nombre,
              url: resp.url
            }
            const resp_s3: any = await this._propService.saveDocumento(data_s3)
            if(resp_s3.error) return this._shareService.alert_simple(resp.header, resp.message) 

            this._propService.getProperties(parseInt(this._propService.property.id)).subscribe( (res:any) => {
              
              this.ngZone.run(() => {
                this._propService.property = res.data 
              });                           
              loading.dismiss()
            })
                        
          }
        }
      ]
    });

    await alert.present();
  }

}
