import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
 @Input('nombre') leyenda: string = 'Leyenda'
 @Input('barra') progreso : number = 50;
 @Output('actulizaValor') cambiarValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  valores(valor: number) {
    if( this.progreso >=100  && valor > 0) {
      this.progreso = 100
      return
    }
    if( this.progreso ==0  && valor < 0) {
      this.progreso = 0
      return
    }
  this.progreso = this.progreso + valor
  this.cambiarValor.emit(this.progreso);  
}

}
