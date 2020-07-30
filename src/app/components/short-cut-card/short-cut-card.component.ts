import {Component} from '@angular/core';
import { ArrayType } from '@angular/compiler';
/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'app-short-cut-card',
  templateUrl: 'short-cut-card.component.html',
  styleUrls: ['short-cut-card.component.css'],
})

export class ShortCutCardComponent {
  shortcuts = [
    new cardContent('Estadisticas', ['Reportes', '?'],'analytics'),
    new cardContent('Usuarios', [], 'accessibility'),
    new cardContent('Trabajadores', [], 'assignment_ind'),
    new cardContent('Solicitudes de registro', ['Trabajadores', 'Intermediarios'], 'all_inbox'),
    new cardContent('Categorias', [], 'bookmarks'),
    new cardContent('Profesiones', [], 'work'), 
    new cardContent('Administradores', [], 'admin_panel_settings')
  ];

}

class cardContent{
  title:string;
  buttons = [];
  icon:string;

  constructor(title:string, buttons, icon){
    this.title = title;
    this.buttons = buttons;
    this.icon = icon;
  }

}