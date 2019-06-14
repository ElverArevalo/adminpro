import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
 @ViewChild('txtProgress') txtProgress: ElementRef
 @Input('nombre') leyenda: string = 'Leyenda';
 @Input('barra') progreso : number = 50;
 @Output('actulizaValor') cambiarValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onchanges(newValue: number) {
    
    //let elemHTML: any = document.getElementsByName('progreso')[0];
  
    
    
    if(newValue >= 100) {
      this.progreso = 100;
    }
    else if (newValue <=0) {
      this.progreso =0;
    }
    else{
      this.progreso = newValue
    }
   // elemHTML.value = Number(this.progreso) ;
   this.txtProgress.nativeElement.value =  this.progreso
      
    this.cambiarValor.emit(this.progreso);
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
    this.txtProgress.nativeElement.focus();
  this.progreso = this.progreso + valor
  this.cambiarValor.emit(this.progreso);  
}

}
