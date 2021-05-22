import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  publicaciones=true;
  public barrio = ['Nacederos y Simó Bolivar'];
  public nombre = ['Miguel Páez'];
  public items = [{perfil:'https://miguelpaez.vercel.app/',
                  img:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  iframe:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  },
                  {perfil:'https://miguelpaez.vercel.app/',
                  img:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  iframe:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  },
                  {perfil:'https://miguelpaez.vercel.app/',
                  img:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  iframe:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  },
                  {perfil:'https://miguelpaez.vercel.app/',
                  img:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  iframe:'https://drive.google.com/uc?export=view&id=1E_AiMAIyNScq4LOr96CHPeW5vOzGoAes',
                  },
                ];
constructor(public menu: MenuController, public alertController: AlertController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  closeFirst() {
    this.menu.close('first');
  }

  openPerfil() {
    this.menu.enable(true, 'second');
    this.menu.open('second');
  }

  closePerfil() {
    this.menu.close('second');
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hola',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}