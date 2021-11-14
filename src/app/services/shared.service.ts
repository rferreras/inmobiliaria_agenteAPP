import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class SharedService {    
  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private camera: Camera
  ) { }

  alert_simple = async(header: string, message: string) => {
    const alert = await this.alertController.create({      
      header,      
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  presentLoading = async(): Promise<any>  => {     
    const loading = await this.loadingController.create({ message: 'Espere por favor ...'})   
    await loading.present()  
    return loading;               
  }

  takePicture = async() => {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    try {
      const imageData = await this.camera.getPicture(options)
      return 'data:image/jpeg;base64,' + imageData
    } catch (error) {
      this.alert_simple('Error', JSON.stringify(error))
    }
  }
}
