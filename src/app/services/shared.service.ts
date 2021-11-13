import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private alertController: AlertController
  ) { }

  alert_simple = async(header: string, message: string) => {
    const alert = await this.alertController.create({      
      header,      
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
