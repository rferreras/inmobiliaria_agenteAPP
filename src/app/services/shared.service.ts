import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {  
  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController
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
}
