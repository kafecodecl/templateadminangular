import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menus: any[] = [];

  constructor() { }

  ngOnInit() {

    // DEMO
    this.menus = [
      {
          titulo: 'Principal',
          icono: 'fa fa-home',
          submenu: [
              {
                  titulo: 'Home',
                  url: '/home',
                  role: [
                      {
                          _id: '',
                          rol_name: ''
                      }
                  ]
              },
              {
                  titulo: 'Soporte',
                  url: '/support',
                  role: [
                      {
                          _id: '',
                          rol_name: ''
                      }
                  ]
              }
          ]
      },
      {
          titulo: 'Mantención',
          icono: 'fa fa-cog',
          submenu: [
              {
                  titulo: 'Mantenedor Usuarios',
                  url: '/usersadmin',
                  role: [
                      {
                          _id: '',
                          rol_name: ''
                      }
                  ]
              }
          ]
      }
  ];;

  }

}
