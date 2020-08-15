import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router'
/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'app-short-cut-card',
  templateUrl: 'short-cut-card.component.html',
  styleUrls: ['short-cut-card.component.css'],
})

export class ShortCutCardComponent {
  constructor (private router:Router){

  }

  shortcuts = [
    new cardContent('Estadisticas', ['Reportes', '?'], 'analytics', '', this.router),
    new cardContent('Usuarios', [], 'accessibility', 'root/usersCrud', this.router),
    new cardContent('Trabajadores', [], 'assignment_ind', '', this.router),
    new cardContent('Solicitudes de registro', ['Trabajadores', 'Intermediarios'], 'all_inbox', '', this.router),
    new cardContent('Categorias', [], 'bookmarks', '', this.router),
    new cardContent('Profesiones', [], 'work', '', this.router),
    new cardContent('Administradores', [], 'admin_panel_settings', '', this.router)
  ];

}

class cardContent {
  title: string;
  buttons = [];
  icon: string;
  route: string;
  path: string;

  constructor(title: string, buttons, icon, route, private router: Router) {
    this.title = title;
    this.buttons = buttons;
    this.icon = icon;
    this.route = route
  }

  onClick() {
    this.path = '../' + this.route;
    this.router.navigate([this.path]);
  }
}