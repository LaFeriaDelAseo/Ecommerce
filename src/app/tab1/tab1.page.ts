import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  publicaciones=true;
  public barrio = ['Nacederos'];
  public nombre = ['Miguel Páez'];

  // public publicacionesJunta = [{img: ""},
  //                             {}]


constructor(public menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  closeFirst() {
    this.menu.close('first');
  }

  openPerfil() {
    this.menu.enable(true, 'end');
    this.menu.open('end');
  }

  closePerfil() {
    this.menu.close('end');
  }
}