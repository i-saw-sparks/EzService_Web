import { Component, AfterViewChecked, OnDestroy, AfterViewInit, OnChanges, OnInit, AfterContentInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router'
import { trigger, state, style, transition, animate, group, query, animateChild } from '@angular/animations';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-short-cut-card',
  templateUrl: 'short-cut-card.component.html',
  styleUrls: ['short-cut-card.component.css'],
  animations: [
    trigger('fadeInState',
      [
        state('loading', style({ opacity: 0, transform: 'scale(0.9)', backgroundColor: '#296096'})),
        state('loaded', style({ opacity: 1, transform: '*',  backgroundColor: '*' })),
        transition('loading => loaded', group([query('@fadeInIcon', animateChild()), animate('300ms')]))
      ]
    ),
    trigger('fadeInIcon',
    [
      state('loading', style({ opacity: 0 })),
      state('loaded', style({ opacity: 1 })),
      transition('loading => loaded', group([animate('400ms 300ms')]))
    ]
    )
  ], 
})

export class ShortCutCardComponent implements AfterViewChecked{
  loading: boolean;
 
  constructor(private router: Router, private cdRef:ChangeDetectorRef) {
    this.loading = true; 
  }

  ngAfterViewChecked(): void {
    this.loading = false;
    this.cdRef.detectChanges();
  }

  shortcuts = [
    new cardContent('Usuarios', [], 'accessibility', 'root/crud/users', this.router),
    new cardContent('Trabajadores', [], 'assignment_ind', 'root/crud/workers', this.router),
    new cardContent('Categorias', [], 'bookmarks', '', this.router),
    new cardContent('Estadisticas', ['Reportes', '?'], 'analytics', '', this.router),
    new cardContent('Profesiones', [], 'work', '', this.router),
    new cardContent('Solicitudes de registro', ['Trabajadores', 'Intermediarios'], 'all_inbox', '', this.router),
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