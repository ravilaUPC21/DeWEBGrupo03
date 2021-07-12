import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: '/user-profile', title: 'Mi perfil',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/change-password', title: 'Cambiar clave',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/register', title: 'Actualización',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/dashboard', title: 'Comprobantes de Pago',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' }

   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
