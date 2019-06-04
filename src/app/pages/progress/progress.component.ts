import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso: number = 50;
  constructor() { }

  ngOnInit() {
  }
  valores(valor) {
   if(this.progreso >0 && this.progreso <100) {
    this.progreso = this.progreso + valor
   }
    
  }

}
