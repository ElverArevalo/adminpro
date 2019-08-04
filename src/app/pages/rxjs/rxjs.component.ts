import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscrition: Subscription
  constructor() {
    /* this.retornarObservable().pipe(
       retry(2)
     )*/
  this.subscrition =   this.retornarObservable().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('el obs termino')
    );
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
  this.subscrition.unsubscribe();
  }
  retornarObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;

        let salida = {
          valor: contador
        };
        observer.next(salida);

       /* if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }*/

        /* if (contador === 2) {
           // clearInterval(intervalo);
           observer.error('auxilio!');
         }*/

      }, 1000);
    }).pipe(
      // OPERADOR MAP
      map(resp => resp.valor),
      filter( (valor, index)=> {
          if((valor % 2)===1) {
            // IMPAR
              return true;
          }else{
            // PAR
            return false;
          }
      })
    );
  }
}
