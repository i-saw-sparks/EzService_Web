import { Component, AfterViewChecked } from '@angular/core';
import { Router, RouterEvent } from '@angular/router'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-short-cut-card',
  templateUrl: 'short-cut-card.component.html',
  styleUrls: ['short-cut-card.component.css'],
  animations: [
    trigger('fadeInState',
      [
        state('loading', style({opacity: 0})),
        state('loaded', style({opacity: 1})),
        transition('loading => loaded', animate('500ms ease-out'))
      ]
    )
  ]
})

export class ShortCutCardComponent implements AfterViewChecked{
  loading: boolean;
  constructor (private router:Router){
    this.loading = true;
  }
  ngAfterViewChecked(): void {
    this.loading = false;
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