import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  hola = "hola mundo";



  constructor() {
    this.contarTres().then(
      mensaje => console.log('termino!', mensaje)
    )
      .catch(error => console.log('Error en la promesa', error))
  }

  ngOnInit() {

  }

  /* LAS PROMESAS ES PARA HACER UNA TAREA ASINCRONA */

  contarTres() {
    // resolve = cuando todo sale bien.
    //reject = cuando todo sale mal.
    return  new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        console.log(contador, "hola mundo");
        if (contador === 3) {
          resolve('OK!');
          //  reject('simplemente un error');
          clearInterval(intervalo);
          this.hola = contador.toString();
        }
      }, 1000);
    });
   }
}
