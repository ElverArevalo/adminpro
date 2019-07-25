import { Component, OnInit, Inject,  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(
    public _ajustes: SettingsService) { }

  ngOnInit() {
    this.AplicarCheck();
  }
  cambiarTema(tema: string, link: any) {
   
    this._ajustes.aplicarTema(tema);
this.check(link);
  }
  check(link: any) { 
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
     
   
}
AplicarCheck() {
  let selectores: any = document.getElementsByClassName('selector');
  let  tema = this._ajustes.ajuste.tema
  for (let ref of selectores) {
    if(ref.getAttribute('data-theme') === tema) {
      ref.classList.add('working');
      break;
    }
   
  }
}
}