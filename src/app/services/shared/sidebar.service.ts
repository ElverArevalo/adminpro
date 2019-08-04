import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menus = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',

      submenu: [
        {
          titulo: 'Dashboard', url:'/dashboard'
        },
        {
          titulo: 'PogressBar', url:'/progress'
        },
        {
          titulo: 'Graficas', url:'/graficas1'
        },
        {
          titulo: 'Promesas', url:'/promesa'
        },
        {
          titulo: 'Componente rxjs', url:'/rxjs'
        },
        
      ]
    }

  ];

  constructor() { }
}
